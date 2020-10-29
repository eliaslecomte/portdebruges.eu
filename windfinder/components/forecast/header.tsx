import { FC } from "react"

import Grid from "../../../core/components/structure/grid";

// TODO: can we use array-item of ThreeHourlyWeather data type here?
// Uses box alignment (https://tailwindcss.com/docs/justify-content)

type Props = {
};

const Header: FC<Props> = ({ }) => {

  return(
    <Grid
      items={[
        <p>Tijd</p>,
        <p>Windr..</p>,
        <p>Temp..</p>,
        <p>Windsnel..</p>,
        <p>Gusts</p>,
        <p>Wave height</p>
      ]} />
  );
}

export default Header;
