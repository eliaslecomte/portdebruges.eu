import { FC, useEffect, useState } from "react"
import WindArrow from "../../core/components/images/windArrow";
import Image from "../../core/components/images";
import Time from "../../core/components/info/time";
import Grid from "../../core/components/structure/grid";

// TODO: can we use array-item of ThreeHourlyWeather data type here?
// Uses box alignment (https://tailwindcss.com/docs/justify-content)

type Props = {
  style?: string,
  predictionDate: number;
  temperature: number;
  windSpeed: number;
  windDirection: number;
  weather: Array<{
    image: string,
    description: string,
  }>,
};

const MiniForecast: FC<Props> = ({ style, predictionDate, temperature, windSpeed, windDirection, weather }) => {
  const [ roundedTemperature, setRoundedTemperature ] = useState<number>();

  useEffect(() => {
    setRoundedTemperature(Math.round(temperature));
  }, [temperature]);

  return(
    <Grid
      style={style}
      items={[
        <Time dateTimeMillis={predictionDate} />,
        <WindArrow direction={windDirection} />,
        <p>{roundedTemperature}°</p>,
        <p>{windSpeed} m/s</p>,
        <>{weather.map((item, index) => <Image key={index} source={item.image} alternative={item.description} width="40px" height="40px" />)}</>,
      ]}
      itemsPerRow={5} />
  );
}

export default MiniForecast;
