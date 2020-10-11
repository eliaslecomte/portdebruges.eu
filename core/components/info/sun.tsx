import { FC } from "react"

// TODO: use formatter
const formatTime = (unixTimestamp: number) => {
  // TODO: should not be unix
  const datetime = new Date(unixTimestamp * 1000);
  return `${datetime.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${datetime.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 })}`;
}

interface Props {
  sunrise: number;
  sunset: number;
}

const Sun: FC<Props> = ({ sunrise, sunset }) => {
  return (
    <p>{formatTime(sunrise)} - {formatTime(sunset)}</p>
  );
}

export default Sun;
