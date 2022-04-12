import { formatCurrentWeather, formatThreeHourlyForecast } from './mappers';

const getOpenWeatherApiKey = () => {
  const openWeatherApiKey = process.env.OPENWEATHER_API_KEY;
  if (typeof openWeatherApiKey !== 'string') {
    throw Error('Could not get OPENWEATHER_API_KEY from environment variables!');
  }
  return openWeatherApiKey;
};

export type currentWeatherResponse = {
  main: {
    feels_like: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  wind: {
    speed: number;
    gust?: number;
    deg: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  clouds: {
    all: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
};

export type CurrentWeather = ReturnType<typeof formatCurrentWeather>;

export async function getCurrentWeather() {
  const openWeatherApiKey = getOpenWeatherApiKey();
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=zeebrugge,be&units=metric&lang=nl&appid=${openWeatherApiKey}`,
  );
  const dataResponse: currentWeatherResponse = await response.json();
  return formatCurrentWeather(dataResponse);
}

type ThreeHourlyItem = {
  main: {
    feels_like: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  clouds: {
    all: number;
  };
  dt: number;
};

export type ThreeHourlyWeatherResponse = {
  list: Array<ThreeHourlyItem>;
};

export type ThreeHourlyWeather = ReturnType<typeof formatThreeHourlyForecast>;

export async function getThreeHourlyWeather() {
  const openWeatherApiKey = getOpenWeatherApiKey();
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=zeebrugge,be&units=metric&lang=nl&appid=${openWeatherApiKey}`,
  );
  const dataResponse: ThreeHourlyWeatherResponse = await response.json();
  return formatThreeHourlyForecast(dataResponse);
}
