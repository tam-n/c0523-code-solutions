import { useState } from 'react';

export default function RegistrationFormControlled(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('username:', username);
    console.log('password:', password);
  }
  return (
    <form className={props.className} onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"></input>
      </label>
      <label>
        Password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"></input>
      </label>
      <button typeof="submit">Submit</button>
    </form>
  );
}
