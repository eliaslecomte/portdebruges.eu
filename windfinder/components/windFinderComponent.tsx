import { FC } from 'react';

import Block from '../../core/components/structure/block';
import Forecast from './forecast';
import type { Superforecast } from '../api/serverSide';
import mixins from '../../core/mixins';

type Props = {
  superforecast: Superforecast,
}

const WindFinderComponent:FC<Props> = ({ superforecast }) => {
  console.log('superforecast data', superforecast);
  return (
    <Block
      title="Superforecast">
      {superforecast.map((weather, index) => (
        <Forecast
          key={`super-forecast-${index}`}
          style={mixins.rowColours(index)}
          predictionDate={weather.date}
          temperature={weather.temperature}
          windSpeed={weather.windSpeed}
          windGusts={weather.windGusts}
          windDirection={weather.windDirection}
           />
      ))}
    </Block>
  )
};

export default WindFinderComponent;
