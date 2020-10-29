
import { FC, useEffect, useState } from "react"
import mixins from "../../mixins";
import WindArrow from "../images/windArrow";

type Props = {
  direction: number;
}

const WindDirection: FC<Props> = ({ direction }) => {
  const [ windIntensity, setWindIntensity ] = useState<string>("");

  useEffect(() => {
    setWindIntensity(mixins.windFunColour(direction));
  }, [ direction]);

  return (
    <div className={`border-l-8 ${windIntensity} border-opacity-75 pl-2`}>
      <WindArrow direction={direction} />
      <p>{direction}°</p>
    </div>
    
  );
}

export default WindDirection;
