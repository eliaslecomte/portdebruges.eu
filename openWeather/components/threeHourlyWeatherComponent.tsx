import { FC } from 'react';

import Block from '../../core/components/structure/block';
import type { ThreeHourlyWeather } from '../api/serverSide';
import MiniForecast from './miniForecast';

type Props = {
  threeHourlyWeather: ThreeHourlyWeather,
}

const ThreeHourlyWeatherComponent:FC<Props> = ({ threeHourlyWeather }) => {
  return (
    <Block
      title="Voorspelling per 3 uur"
      description={<>Voorspelling per 3 uur van <a href="https://openweathermap.org/city/2783307" target="_blank">OpenWeather</a>.</>}>
        {threeHourlyWeather.map((weather, index) => (
          <MiniForecast
            key={`miniforecast-${index}`}
            style={index%2 === 0 ? 'bg-gray-100' : 'bg-white'}
            predictionDate={weather.predictionDate}
            temperature={weather.temperature}
            windSpeed={weather.windSpeed}
            windDirection={weather.windDirection}
            weather={weather.weather} />))}
      </Block>
  )
};

export default ThreeHourlyWeatherComponent;
