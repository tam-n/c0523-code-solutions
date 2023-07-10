import { useState } from 'react';

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onClick={() => {
          setIsOn(!isOn);
        }}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        {isOn === false ? 'OFF' : 'ON'}
      </label>
    </div>
  );
}
