import { FC, useEffect, useState } from 'react';

type Props = {
  current: number;
  feelsLike?: number;
};

const Temperature: FC<Props> = ({ current, feelsLike }) => {
  const [roundedCurrent, setRoundedCurrent] = useState<number>();
  const [roundedFeelsLike, setRoundedFeelsLike] = useState<number>();
  const [showFeelsLike, setShowFeelsLike] = useState<boolean>();

  useEffect(() => {
    setRoundedCurrent(Math.round(current));
    setRoundedFeelsLike(feelsLike ? Math.round(feelsLike) : feelsLike);
    if (roundedCurrent !== roundedFeelsLike && roundedFeelsLike) {
      setShowFeelsLike(true);
    } else {
      setShowFeelsLike(false);
    }
  }, [current, feelsLike, roundedCurrent, roundedFeelsLike]);

  return (
    <p>
      {roundedCurrent}°{showFeelsLike ? `, voelt als ${roundedFeelsLike}°` : null}
    </p>
  );
};

export default Temperature;
