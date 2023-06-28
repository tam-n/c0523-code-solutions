import { useState } from 'react';
import SequentialButton from './SequentialButton';
import ItemName from './ItemName';
import IndicatorButton from './IndicatorButton';

export default function RotatingBanner(props) {
  let [index, setIndex] = useState(0);

  console.log(index);
  return (
    <div>
      <ItemName items={props.items} index={index} />
      <SequentialButton text="Prev" onCustomClick={() => setIndex(index - 1)} />
      <IndicatorButton
        items={props.items}
        index={index}
        onCustomClick={setIndex}
      />
      <SequentialButton text="Next" onCustomClick={() => setIndex(index + 1)} />
    </div>
  );
}
