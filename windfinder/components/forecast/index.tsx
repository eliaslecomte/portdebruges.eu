/* eslint-disable react/jsx-key */
import { FC, useEffect, useState } from 'react';

import WindArrow from '../../../core/components/images/windArrow';
import Grid from '../../../core/components/structure/grid';
import WindSpeedByMs from '../../../core/components/windSpeed/windSpeedByMs';
import Time from '../time';

// TODO: can we use array-item of ThreeHourlyWeather data type here?
// Uses box alignment (https://tailwindcss.com/docs/justify-content)

type Props = {
  style?: string;
  predictionDate: string;
  temperature: number;
  windSpeed: number;
  windGusts: number;
  windDirection: number;
  waveHeight: number;
};

const Forecast: FC<Props> = ({
  style,
  predictionDate,
  temperature,
  windSpeed,
  windGusts,
  windDirection,
  waveHeight
}) => {
  const [roundedTemperature, setRoundedTemperature] = useState<number>();
  useEffect(() => {
    setRoundedTemperature(Math.round(temperature));
  }, [temperature]);

  return (
    <Grid
      style={style}
      items={[
        <Time dateTimeString={predictionDate} />,
        <WindArrow direction={windDirection} />,
        <p>{roundedTemperature}°</p>,
        <WindSpeedByMs metersPerSecond={windSpeed} />,
        <WindSpeedByMs metersPerSecond={windGusts} />,
        <p>{waveHeight}m</p>
      ]}
    />
  );
};

export default Forecast;
