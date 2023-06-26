import CustomButton from './CustomButton';
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function handleClickEvent() {
    setCounter(counter + 1);
  }

  let color =
    counter === 3
      ? 'rgb(53, 28, 117)'
      : counter === 6
      ? 'rgb(103,78,167)'
      : counter === 9
      ? 'rgb(224, 102, 102)'
      : counter === 12
      ? 'rgb(246,178,107)'
      : counter === 15
      ? 'rgb(255,255,0)'
      : counter === 18
      ? 'rgb(255, 255, 255)'
      : '(255, 255, 255)';
  let textColor =
    counter > 12 ? 'black' : counter === 3 || counter > 3 ? 'white' : 'black';

  return (
    <div className="App">
      <CustomButton
        className={'hot-button'}
        customOnClick={handleClickEvent}
        style={{ backgroundColor: color, color: textColor }}
        text={'Hot Button'}
      />
    </div>
  );
}

export default App;
