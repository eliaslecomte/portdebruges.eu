import { FC } from "react"

type Props = {
  metersPerSecond: number;
  knots: number;
}

const WindSpeed: FC<Props> = ({ metersPerSecond, knots }) => {
  return (//{currentMeetnetData?.windSpeed.metersPerSecond} m/s or {currentMeetnetData?.windSpeed.knots} kt
    <p>{metersPerSecond}m/s of {knots}kt</p>
  );
}

export default WindSpeed;
