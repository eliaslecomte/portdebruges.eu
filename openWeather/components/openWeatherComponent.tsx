import { FC } from 'react';

import Block from '../../core/components/structure/block';
import Table from '../../core/components/table';
import Sun from '../../core/components/info/sun';
import Temperature from '../../core/components/info/temperature';
import { currentWeatherResponse } from '../api/serverSide';
import Wind from '../../core/components/info/wind';

type Props = {
  currentWeather: currentWeatherResponse
}

const OpenWeatherComponent:FC<Props> = ({ currentWeather }) => {

  return (
    <Block
      title="Weerbericht"
      descriptionContent={[
        <>
          Huidig weer info van <a href="https://openweathermap.org/city/2783307" target="_blank">OpenWeather</a>.
        </>
      ]}>
        <Table values={[
          { title: 'Temperatuur', description: <Temperature current={currentWeather.main.temp} feelsLike={currentWeather.main.feels_like} /> },
          { title: 'Zonsop & ondergang', description: <Sun sunrise={currentWeather.sys.sunrise} sunset={currentWeather.sys.sunset} /> },
          { title: 'Wind', description: <Wind speed={currentWeather.wind.speed} gusts={currentWeather.wind.gust} direction={currentWeather.wind.deg} /> },
        ]} />
      </Block>
  )
};

export default OpenWeatherComponent;
