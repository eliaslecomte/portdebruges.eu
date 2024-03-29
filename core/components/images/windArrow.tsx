import Image from 'next/image';
import { FC } from 'react';

type Props = {
  direction: number;
};

const WindArrow: FC<Props> = ({ direction }) => {
  return (
    <img
      style={{ transform: `rotate(${direction}deg)` }}
      className="float-left mr-1"
      src="/weather/wind.svg"
      width={40}
      height={40}
    />
  );
  // return (
  //   <svg style={{ transform: `rotate(${direction}deg)` }} className="float-left mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  //     <path transform="rotate(90 12.000000000000002,12) " d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
  //   </svg>
  // );
};

export default WindArrow;
