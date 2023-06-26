import { useState } from 'react';
import MyButton from './button';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function handleClickSubtract() {
    setCounter(counter - 1);
  }

  function handleClickAdd() {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <MyButton text={'Down'} onCustomClick={handleClickSubtract} />
      <div>{counter}</div>
      <MyButton text={'Up'} onCustomClick={handleClickAdd} />
    </div>
  );
}

export default App;
