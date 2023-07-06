import { useState } from 'react';

export default function ToggleSwitch() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onClick={() => {
          toggle === false ? setToggle(true) : setToggle(false);
        }}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        {toggle === false ? 'OFF' : 'ON'}
      </label>
    </div>
  );
}
