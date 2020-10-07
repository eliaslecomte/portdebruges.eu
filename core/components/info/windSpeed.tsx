import { FC } from "react"

type Props = {
  metersPerSecond: number;
  knots: number;
}

const styleForWindSpeed = (metersPerSecond: number) => {
  if (metersPerSecond > 20) {
    return "red-300";
  } else if (metersPerSecond > 15) {
    return "green-600";
  } else if (metersPerSecond > 10) {
    return "green-400";
  } else if (metersPerSecond > 6) {
    return "green-200";
  }
  
  return "";
}

const WindSpeed: FC<Props> = ({ metersPerSecond, knots }) => {
  return (
    <div className={`border-l-8 border-${styleForWindSpeed(metersPerSecond)} border-opacity-75 pl-2`}>
      <p className={styleForWindSpeed(metersPerSecond)}>{metersPerSecond}m/s of {knots}kt</p>
    </div>
    
  );
}

export default WindSpeed;
