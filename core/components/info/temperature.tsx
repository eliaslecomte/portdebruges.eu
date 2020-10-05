import { FC } from "react"

type Props = {
  current: number;
  feelsLike?: number;
}

const Temperature: FC<Props> = ({ current, feelsLike }) => {
  return (
    <p>{Math.round(current)}°{feelsLike ? `, voelt als ${Math.round(feelsLike)}°` : null}</p>
  );
}

export default Temperature;
