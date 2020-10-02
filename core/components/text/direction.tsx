import { FC } from "react"

type Props = {
  value: number;
}

const Direction: FC<Props> = ({ value }) => {
  return (
    <p>{value} deg</p>
  );
}

export default Direction;
