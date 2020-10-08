import { FC } from 'react';

import Block from '../../core/components/structure/block';
import Table from '../../core/components/table';
import Sun from '../../core/components/info/sun';
import Temperature from '../../core/components/info/temperature';
import Wind from '../../core/components/info/wind';

type Props = {
}

const WindFinderComponent:FC<Props> = () => {

  return (
    <Block
      title="Windfinder">
      <p>Todo!</p>
    </Block>
  )
};

export default WindFinderComponent;
