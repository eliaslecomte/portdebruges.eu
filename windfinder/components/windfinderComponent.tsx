import { FC } from 'react';

import Block from '../../core/components/structure/block';
import mixins from '../../core/mixins';
import type { Superforecast } from '../api/serverSide';
import Header from './forecast/header';
import Forecast from './forecast/index';

type Props = {
  superforecast: Superforecast;
};

const WindfinderComponent: FC<Props> = ({ superforecast }) => {
  return (
    <>
      <Block title="Windvoorspelling vandaag" description="De superforecast van Windfinder!">
        <Header />
        {superforecast.today.map((weather, index) => (
          <Forecast
            key={`super-forecast-${index}`}
            style={mixins.rowColours(index)}
            predictionDate={weather.date}
            temperature={weather.temperature}
            windSpeed={weather.windSpeed}
            windGusts={weather.windGusts}
            windDirection={weather.windDirection}
            waveHeight={weather.waveHeight}
          />
        ))}
      </Block>
      <Block title="Windvoorspelling morgen" description="De superforecast van Windfinder!">
        <Header />
        {superforecast.tomorrow.map((weather, index) => (
          <Forecast
            key={`super-forecast-${index}`}
            style={mixins.rowColours(index)}
            predictionDate={weather.date}
            temperature={weather.temperature}
            windSpeed={weather.windSpeed}
            windGusts={weather.windGusts}
            windDirection={weather.windDirection}
            waveHeight={weather.waveHeight}
          />
        ))}
      </Block>
      <Block title="Windvoorspelling overmorgen" description="De superforecast van Windfinder!">
        <Header />
        {superforecast.dayAfterTomorrow.map((weather, index) => (
          <Forecast
            key={`super-forecast-${index}`}
            style={mixins.rowColours(index)}
            predictionDate={weather.date}
            temperature={weather.temperature}
            windSpeed={weather.windSpeed}
            windGusts={weather.windGusts}
            windDirection={weather.windDirection}
            waveHeight={weather.waveHeight}
          />
        ))}
      </Block>
    </>
  );
};

export default WindfinderComponent;
