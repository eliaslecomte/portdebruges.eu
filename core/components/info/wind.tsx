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
      <p>Wind: {speed}m/s, gusts: {gusts}m/s</p>
      <WindArrow direction={direction} />
    </>
  );
}

export default Wind;
