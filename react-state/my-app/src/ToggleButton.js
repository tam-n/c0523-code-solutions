import { useState } from 'react';

export default function ToggleButton(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(isClicked === false ? true : false);
  }

  return <button onClick={handleClick}>{props.text}</button>;
}
