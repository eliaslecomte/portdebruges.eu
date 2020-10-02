import { FC } from "react"

type Props = {
  value: number;
}

const Temperature: FC<Props> = ({ value }) => {
  return (
    <p>{value} °C</p>
  );
}

export default Temperature;