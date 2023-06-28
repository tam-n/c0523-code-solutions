import { useState } from 'react';

export default function ToggleButton(props) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('This is the value returned by useState', isClicked);

  function handleClick() {
    console.log('This is the value before calling setter', isClicked);
    setIsClicked(isClicked === false ? true : false);
    console.log('This is the value after calling setter', isClicked);
  }

  return (
    <button
      style={{ backgroundColor: isClicked === true ? props.color : 'white' }}
      onClick={handleClick}>
      {props.text}
    </button>
  );
}
