import { FC, useEffect, useState } from 'react';

import mixins from '../../mixins';
import WindArrow from '../images/windArrow';

type Props = {
  speed: number;
  gusts: number | null;
  direction: number;
};

const Wind: FC<Props> = ({ speed, gusts, direction }) => {
  const [windIntensity, setWindIntensity] = useState<string>('');

  useEffect(() => {
    setWindIntensity(mixins.windFunColour(direction));
  }, [direction]);

  return (
    <div className={`border-l-8 border-${windIntensity} border-opacity-75 pl-2`}>
      <WindArrow direction={direction} />
      <p>
        {speed}m/s{gusts ? ` (gusts: ${gusts}m/s)` : null}
      </p>
    </div>
  );
};

export default Wind;
