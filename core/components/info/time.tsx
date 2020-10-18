import { FC } from "react"
import { formatTime } from "../../formatters";

type Props = {
  dateTime: Date;
}

// TODO: given it's tied to openWeather, should be stored there?
const Time: FC<Props> = ({ dateTime }) => {
  return (
    <p>{formatTime(dateTime)}</p>
  );
}

export default Time;
