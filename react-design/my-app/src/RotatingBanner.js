import { useState } from 'react';
import SequentialButton from './SequentialButton';
import ItemName from './ItemName';
import IndicatorButton from './IndicatorButton';

export default function RotatingBanner(props) {
  return (
    <div>
      <ItemName items={props.items} />
      <SequentialButton text="Prev" />
      <IndicatorButton items={props.items} />
      <SequentialButton text="Next" />
    </div>
  );
}
