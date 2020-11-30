import { FC } from "react"
import mixins from "../../mixins";

type Props = {
  metersPerSecond: number;
}

const styleForWindSpeed = (metersPerSecond: number) => {
  if (metersPerSecond > 40) {
    return mixins.windTextColours.tricky;
  } else if (metersPerSecond > 30) {
    return mixins.windTextColours.awesome;
  } else if (metersPerSecond > 15) {
    return mixins.windTextColours.safe;
  } else if (metersPerSecond > 12) {
    return mixins.windTextColours.boring;
  }
  
  return '';
}

const WindSpeedByMs: FC<Props> = ({ metersPerSecond }) => {
  const windSpeedStyle = styleForWindSpeed(metersPerSecond)

  return (
    <p className={windSpeedStyle}>{metersPerSecond}m/s</p>
  );
}

export default WindSpeedByMs;
