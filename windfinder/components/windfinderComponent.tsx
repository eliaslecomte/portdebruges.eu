import { FC } from 'react';

import Block from '../../core/components/structure/block';
import Forecast from './forecast/index';
import type { Superforecast } from '../api/serverSide';
import mixins from '../../core/mixins';
import Header from './forecast/header';

type Props = {
  superforecast: Superforecast,
}

const WindfinderComponent:FC<Props> = ({ superforecast }) => {
  return (
    <Block
      title="Windvoorspelling"
      description="De superforecast van Windfinder!">
        <Header />
        {superforecast.map((weather, index) => (
          <Forecast
            key={`super-forecast-${index}`}
            style={mixins.rowColours(index)}
            predictionDate={weather.date}
            temperature={weather.temperature}
            windSpeed={weather.windSpeed}
            windGusts={weather.windGusts}
            windDirection={weather.windDirection} />
        ))}
    </Block>
  )
};

export default WindfinderComponent;
