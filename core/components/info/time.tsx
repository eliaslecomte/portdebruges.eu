import { FC } from "react"
import { formatTime } from "../../formatters";

type Props = {
  dateTimeMillis: number;
}

const Time: FC<Props> = ({ dateTimeMillis }) => {
  return (
    <p>{formatTime(dateTimeMillis)}</p>
  );
}

export default Time;
