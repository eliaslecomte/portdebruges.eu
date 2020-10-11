import { FC } from "react"
import WindArrow from "../drawables/windArrow";

type Props = {
  speed: number;
  gusts: number | null;
  direction: number;
}

const Wind: FC<Props> = ({ speed, gusts, direction }) => {
  return (
    <>
      <WindArrow direction={direction} />
      <p>Wind: {speed}m/s{gusts ? `, gusts: ${gusts}m/s` : null}</p>
    </>
  );
}

export default Wind;
