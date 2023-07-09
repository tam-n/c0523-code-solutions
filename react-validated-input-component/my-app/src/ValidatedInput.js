import { useState } from 'react';

export default function ValidatedInput() {
  const [isTooShort, setIsTooShort] = useState(false);
  const [hasNoPassword, setHasNoPassword] = useState(false);
  const [initialRender, setInitialRender] = useState(false);

  function handleTooShort(event) {
    if (event.target.value.length < 8) {
      setIsTooShort(true);
    } else {
      setIsTooShort(false);
    }
  }

  function handleNoPassword(event) {
    if (event.target.value.length === 0) {
      setHasNoPassword(true);
    } else {
      setHasNoPassword(false);
    }
  }

  return (
    <div className="col-3">
      <label htmlFor="validationCustom01" className="form-label col-6">
        Password
      </label>
      <div className="row align-items-center">
        <input
          type="password"
          className="form-control position-relative mx-4"
          id="validationCustom01"
          required
          onChange={(event) => {
            handleNoPassword(event);
            handleTooShort(event);
            setInitialRender(true);
          }}
        />
        {(hasNoPassword || isTooShort) && (
          <i className="fa-solid fa-xmark fa-lg position-absolute"></i>
        )}
        {!isTooShort && !hasNoPassword && initialRender && (
          <i className="fa-solid fa-check fa-lg position-absolute"></i>
        )}
      </div>
      {hasNoPassword && (
        <div className="is-required">A password is required.</div>
      )}
      {isTooShort && !hasNoPassword && (
        <div className="too-short">Your password is too short.</div>
      )}
    </div>
  );
}
