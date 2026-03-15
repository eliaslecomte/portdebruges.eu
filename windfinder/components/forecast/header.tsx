import { FC } from 'react';

import Grid from '../../../core/components/structure/grid';

// TODO: can we use array-item of ThreeHourlyWeather data type here?
// Uses box alignment (https://tailwindcss.com/docs/justify-content)

const Header: FC = () => {
  return (
    <Grid
      items={[
        <p key="tijd">Tijd</p>,
        <p key="windr">Windr..</p>,
        <p key="temp">Temp..</p>,
        <p key="winds">Windsnel..</p>,
        <p key="gusts">Gusts</p>,
        <p key="wave">Wave height</p>,
      ]}
    />
  );
};

export default Header;
