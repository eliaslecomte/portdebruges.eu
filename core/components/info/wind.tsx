import { FC } from "react"
import WindArrow from "../drawables/windArrow";

type Props = {
  speed: number;
  gusts: number;
  direction: number;
}

const Wind: FC<Props> = ({ speed, gusts, direction }) => {
  return (
    <>
      <WindArrow direction={direction} />
      <p>Wind: {speed}m/s, gusts: {gusts}m/s</p>
    </>
  );
}

export default Wind;
