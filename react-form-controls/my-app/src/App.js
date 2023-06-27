import RegistrationFormUncontrolled from './RegistrationFormUnctrolled';
import RegistrationFormControlled from './RegistrationFormControlled';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Uncontrolled</p>
      <RegistrationFormUncontrolled className="uncontrolled" />
      <p>Controlled</p>
      <RegistrationFormControlled className="controlled" />
    </div>
  );
}

export default App;
