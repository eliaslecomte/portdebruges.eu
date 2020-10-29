import { FC, useEffect, useState } from "react"
import mixins from "../../mixins";

type Props = {
  metersPerSecond: number;
  knots: number;
}

const styleForWindSpeed = (metersPerSecond: number) => {
  if (metersPerSecond > 20) {
    return mixins.funColours.tricky;
  } else if (metersPerSecond > 15) {
    return mixins.funColours.awesome;
  } else if (metersPerSecond > 10) {
    return mixins.funColours.safe;
  } else if (metersPerSecond > 6) {
    return mixins.funColours.boring;
  }
  
  return "";
}

const WindSpeed: FC<Props> = ({ metersPerSecond, knots }) => {
  const [ windIntensity, setWindIntensity ] = useState<string>("");

  useEffect(() => {
    setWindIntensity(styleForWindSpeed(metersPerSecond));
  }, [ metersPerSecond]);

  return (
    <div className={`border-l-8 ${windIntensity} border-opacity-75 pl-2`}>
      <p>{metersPerSecond}m/s of {knots}kt</p>
    </div>
    
  );
}

export default WindSpeed;
