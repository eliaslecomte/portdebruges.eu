import { formatSuperforecast } from './mappers';
import { data } from './mock';

const getWindfinderApiKey = () => {
  const openWeatherApiKey = process.env.WINDFINDER_API_KEY;
  if (typeof openWeatherApiKey !== 'string') {
    throw Error('Could not get WINDFINDER_API_KEY from environment variables!');
  }
  return openWeatherApiKey;
};

const useMock = () => {
  const useMock = process.env.WINDFINDER_USE_MOCK;
  return Boolean(useMock === 'true');
};

export type superforecastsResponse = Array<{
  wah: number;
  wad: number;
  wap: number;
  ws: number;
  wg: number;
  wd: number;
  at: number;
  fl: number;
  ap: number;
  cl: number;
  p: number;
  rh: number;
  dtl: string; // ISO8601 format
}>;

export type Superforecast = ReturnType<typeof formatSuperforecast>;

export async function getSuperforecasts() {
  const openWeatherApiKey = getWindfinderApiKey();
  if (useMock()) {
    return formatSuperforecast(data as superforecastsResponse);
  }

  // limit is max 72 or 3 days
  const response = await fetch(
    'https://rapidapi.p.rapidapi.com/spots/be55/superforecasts?limit=72',
    {
      headers: {
        'x-rapidapi-host': 'api-windfinder-pro.p.rapidapi.com',
        'x-rapidapi-key': openWeatherApiKey,
        useQueryString: 'true',
      },
    },
  );
  const dataResponse: superforecastsResponse = await response.json();
  return formatSuperforecast(dataResponse);
}
