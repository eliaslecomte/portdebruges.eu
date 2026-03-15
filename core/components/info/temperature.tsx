import { FC } from 'react';

type Props = {
  current: number;
  feelsLike?: number;
};

const Temperature: FC<Props> = ({ current, feelsLike }) => {
  const roundedCurrent = Math.round(current);
  const roundedFeelsLike = feelsLike ? Math.round(feelsLike) : undefined;
  const showFeelsLike = roundedFeelsLike !== undefined && roundedCurrent !== roundedFeelsLike;

  return (
    <p>
      {roundedCurrent}°{showFeelsLike ? `, voelt als ${roundedFeelsLike}°` : null}
    </p>
  );
};

export default Temperature;
