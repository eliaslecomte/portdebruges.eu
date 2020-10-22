import { FC, useEffect, useState } from "react"
import WindArrow from "../../../core/components/images/windArrow";
import Image from "../../../core/components/images";
import Time from "../time";
import Grid from "../../../core/components/structure/grid";
import Wind from "../../../core/components/info/wind";

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
      ]}
      itemsPerRow={5} />
  );
}

export default Header;
