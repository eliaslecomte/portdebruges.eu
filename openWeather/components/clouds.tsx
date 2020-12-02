import { FC } from 'react';

type Props = {
  clouds: number;
};

const Clouds: FC<Props> = ({ clouds }) => {
  return <p>{clouds}%</p>;
};

export default Clouds;
