import { FC } from 'react';

import Block from '../../core/components/structure/block';
import mixins from '../../core/mixins';
import type { ThreeHourlyWeather } from '../api/serverSide';
import Forecast from './forecast';

type Props = {
  threeHourlyWeather: ThreeHourlyWeather,
}

const ThreeHourlyWeatherComponent:FC<Props> = ({ threeHourlyWeather }) => {
  return (
    <Block
      title="Voorspelling per 3 uur"
      description={<>Voorspelling per 3 uur van <a href="https://openweathermap.org/city/2783307" target="_blank">OpenWeather</a>.</>}>
        {threeHourlyWeather.map((weather, index) => (
          <Forecast
            key={`three-hourly-weather-forecast-${index}`}
            style={mixins.rowColours(index)}
            predictionDate={weather.predictionDate}
            temperature={weather.temperature}
            windSpeed={weather.windSpeed}
            windDirection={weather.windDirection}
            weather={weather.weather} />))}
      </Block>
  )
};

export default ThreeHourlyWeatherComponent;
