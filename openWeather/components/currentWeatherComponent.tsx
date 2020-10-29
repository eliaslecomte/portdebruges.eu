import { FC } from 'react';

import Block from '../../core/components/structure/block';
import Table from '../../core/components/structure/table';
import Sun from '../../core/components/info/sun';
import Temperature from '../../core/components/info/temperature';
import type { CurrentWeather } from '../api/serverSide';
import Wind from '../../core/components/info/wind';
import Clouds from './clouds';

type Props = {
  currentWeather: CurrentWeather,
}

const OpenWeatherComponent:FC<Props> = ({ currentWeather }) => {

  return (
    <Block
      title="Weerbericht"
      description={<>Dagelijks weerbericht van <a href="https://openweathermap.org/city/2783307" target="_blank">OpenWeather</a></>}>
        <Table values={[
          { title: 'Temperatuur', description: <Temperature current={currentWeather.temperature} feelsLike={currentWeather.temperatureFeelsLike} /> },
          { title: 'Zonsop & ondergang', description: <Sun sunrise={currentWeather.sunrise} sunset={currentWeather.sunset} /> },
          // TODO: remove
          // { title: 'Wind', description: <Wind speed={currentWeather.windSpeed} gusts={currentWeather.windGusts} direction={currentWeather.windDirection} /> },
          { title: 'Wolken (in percentage)', description: <Clouds clouds={currentWeather.clouds} /> }
        ]} />
      </Block>
  )
};

export default OpenWeatherComponent;
