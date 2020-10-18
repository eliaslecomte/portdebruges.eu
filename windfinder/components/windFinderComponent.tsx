import { FC } from 'react';

import Block from '../../core/components/structure/block';
import type { Superforecast } from '../api/serverSide';

type Props = {
  superforecast: Superforecast,
}

const WindFinderComponent:FC<Props> = ({ superforecast }) => {
  console.log('superforecast data', superforecast);
  return (
    <Block
      title="Superforecast">
      <p>Todo!</p>
    </Block>
  )
};

export default WindFinderComponent;
