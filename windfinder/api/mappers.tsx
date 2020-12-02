import addDays from 'date-fns/addDays';
import { utcToZonedTime } from 'date-fns-tz';

import { superforecastsResponse } from './serverSide';

export function formatSuperforecast(data: superforecastsResponse) {
  const mappedData = data.map((forecast) => ({
    waveHeight: forecast.wah,
    waveDirection: forecast.wad,
    wavePeriod: forecast.wap,
    windSpeed: forecast.ws,
    windGusts: forecast.wg,
    windDirection: forecast.wd,
    temperature: forecast.at,
    temperatureFeelsLike: forecast.fl,
    clouds: forecast.cl,
    date: forecast.dtl
  }));

  // TODO: move
  const todayStart = utcToZonedTime(Date.now(), 'Europe/Brussels');
  todayStart.setHours(7);
  todayStart.setMinutes(0);
  todayStart.setSeconds(0);
  todayStart.setMilliseconds(0);
  const todayEnd = utcToZonedTime(Date.now(), 'Europe/Brussels');
  todayEnd.setHours(21);
  todayEnd.setMinutes(0);
  todayEnd.setSeconds(0);
  todayEnd.setMilliseconds(0);
  const tomorrowStart = addDays(todayStart, 1);
  const tomorrowEnd = addDays(todayEnd, 1);
  const dayAfterTomorrowStart = addDays(todayStart, 2);
  const dayAfterTomorrowEnd = addDays(todayEnd, 2);

  return {
    today: mappedData.filter((item) => {
      const dateAsNumber = utcToZonedTime(item.date, 'Europe/Brussels');
      return dateAsNumber >= todayStart && dateAsNumber <= todayEnd;
    }),
    tomorrow: mappedData.filter((item) => {
      const dateAsNumber = utcToZonedTime(item.date, 'Europe/Brussels');
      return dateAsNumber >= tomorrowStart && dateAsNumber <= tomorrowEnd;
    }),
    dayAfterTomorrow: mappedData.filter((item) => {
      const dateAsNumber = utcToZonedTime(item.date, 'Europe/Brussels');
      return dateAsNumber >= dayAfterTomorrowStart && dateAsNumber <= dayAfterTomorrowEnd;
    })
  };
}
