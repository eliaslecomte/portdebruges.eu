import { FC } from 'react';

import CoreTime from '../../core/components/info/time';
import { parseDate } from '../parsers';

type Props = {
  dateTimeMillis: number;
};

const Time: FC<Props> = ({ dateTimeMillis }) => {
  const date = parseDate(dateTimeMillis);
  return <CoreTime dateTime={date} />;
};

export default Time;
