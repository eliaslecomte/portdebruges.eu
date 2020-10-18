import { superforecastsResponse } from "./serverSide";

export function formatSuperforecast(data: superforecastsResponse) {
  // console.log(data);
  return data.map(forecast => ({
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