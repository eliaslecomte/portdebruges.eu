import { FC, useEffect, useState } from "react"

import WindArrow from "../../../core/components/images/windArrow";
import Time from "../time";
import Grid from "../../../core/components/structure/grid";
import Wind from "../../../core/components/info/wind";

// TODO: can we use array-item of ThreeHourlyWeather data type here?
// Uses box alignment (https://tailwindcss.com/docs/justify-content)

type Props = {
  style?: string,
  predictionDate: string;
  temperature: number;
  windSpeed: number;
  windGusts: number,
  windDirection: number,
};

const Forecast: FC<Props> = ({ style, predictionDate, temperature, windSpeed, windGusts, windDirection }) => {
  const [ roundedTemperature, setRoundedTemperature ] = useState<number>();

  useEffect(() => {
    setRoundedTemperature(Math.round(temperature));
  }, [temperature]);

  return(
    <Grid
      style={style}
      items={[
        <Time dateTimeString={predictionDate} />,
        <WindArrow direction={windDirection} />,
        <p>{roundedTemperature}°</p>,
        <p>{windSpeed} m/s</p>,
        <p>{windGusts} m/s</p>,
      ]}
      itemsPerRow={5} />
  );
}

export default Forecast;
