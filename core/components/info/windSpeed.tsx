import { FC, useEffect, useState } from "react"

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
  const [ windIntensity, setWindIntensity ] = useState<string>("");

  useEffect(() => {
    setWindIntensity(styleForWindSpeed(metersPerSecond));
  }, [ metersPerSecond]);

  return (
    <div className={`border-l-8 border-${windIntensity} border-opacity-75 pl-2`}>
      <p>{metersPerSecond}m/s of {knots}kt</p>
    </div>
    
  );
}

export default WindSpeed;
