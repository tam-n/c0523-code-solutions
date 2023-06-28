import { useState } from 'react';
import SequentialButton from './SequentialButton';
import ItemName from './ItemName';
import IndicatorButton from './IndicatorButton';

export default function RotatingBanner(props) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <ItemName items={props.items} index={index} />
      <SequentialButton
        text="Prev"
        onCustomClick={() => {
          let newIndex = index - 1;
          if (newIndex < 0) {
            setIndex(props.items.length - 1);
          } else {
            setIndex(newIndex);
          }
        }}
      />
      <IndicatorButton
        items={props.items}
        index={index}
        onCustomClick={setIndex}
      />
      <SequentialButton
        text="Next"
        onCustomClick={() => {
          let newIndex = index + 1;
          if (newIndex > props.items.length - 1) {
            setIndex(0);
          } else {
            setIndex(newIndex);
          }
        }}
      />
    </div>
  );
}
