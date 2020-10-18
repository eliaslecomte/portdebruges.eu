import { FC } from "react"
import Datetime from "../../core/components/info/datetime";

import CoreTime from "../../core/components/info/time";
import { parseDate } from "../parsers";


type Props = {
  dateTimeString: string;
}

const Time: FC<Props> = ({ dateTimeString }) => {
  const date = parseDate(dateTimeString);
  return (
    <CoreTime dateTime={date} />
  )
}

export default Time;
