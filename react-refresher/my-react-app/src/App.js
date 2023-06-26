import { useState } from 'react';
import MyButton from './button';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function handleClickSubtract() {
    setCounter(counter - 1);
    console.log('subtracted');
  }

  function handleClickAdd() {
    setCounter(counter + 1);
    console.log('added');
  }

  return (
    <div className="App">
      <MyButton text={'Down'} onClick={handleClickSubtract} />
      <div>{counter}</div>
      <MyButton text={'Up'} onClick={handleClickAdd} />
    </div>
  );
}

export default App;
