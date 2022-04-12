import { findImageSrc } from './parsers';
import type { currentWeatherResponse, ThreeHourlyWeatherResponse } from './serverSide';

export function formatCurrentWeather(data: currentWeatherResponse) {
  return {
    temperature: data.main.temp,
    temperatureFeelsLike: data.main.feels_like,
    temperatureMax: data.main.temp_max,
    temperatureMin: data.main.temp_min,
    windSpeed: data.wind.speed,
    windGusts: data.wind.gust ? data.wind.gust : null,
    windDirection: data.wind.deg,
    clouds: data.clouds.all,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
  };
}

export function formatThreeHourlyForecast(data: ThreeHourlyWeatherResponse) {
  return data.list.slice(0, 5).map((forecast) => ({
    temperature: forecast.main.temp,
    temperatureFeelsLike: forecast.main.feels_like,
    temperatureMax: forecast.main.temp_max,
    temperatureMin: forecast.main.temp_min,
    windSpeed: forecast.wind.speed,
    windDirection: forecast.wind.deg,
    clouds: forecast.clouds.all,
    predictionDate: forecast.dt * 1000,
    weather: forecast.weather.map((weather) => ({
      image: `/weather/${findImageSrc(weather.icon)}`,
      description: weather.description,
    })),
  }));
}
