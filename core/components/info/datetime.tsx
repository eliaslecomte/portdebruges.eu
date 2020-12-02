import { FC } from 'react';

type Props = {
  date: Date;
};

const Datetime: FC<Props> = ({ date }) => {
  return <p>{date.toLocaleString()}</p>;
};

export default Datetime;
