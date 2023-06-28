import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <ToggleButton color="red" text="btn 1" />
      <ToggleButton color="blue" text="btn 2" />
      <ToggleButton color="green" text="btn 3" />
    </div>
  );
}

export default App;
