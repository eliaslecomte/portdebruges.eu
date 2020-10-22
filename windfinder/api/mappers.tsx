import { superforecastsResponse } from "./serverSide";

const showItems = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

export function formatSuperforecast(data: superforecastsResponse) {
  return data
    .filter((item, index) => showItems.includes(index))
    .map(forecast => ({
      waveHeight: forecast.wah,
      waveDirection: forecast.wad,
      wavePeriod: forecast.wap,
      windSpeed: forecast.ws,
      windGusts: forecast.wg,
      windDirection: forecast.wd,
      temperature: forecast.at,
      temperatureFeelsLike: forecast.fl,
      clouds: forecast.cl,
      date: forecast.dtl,
    }));
}
