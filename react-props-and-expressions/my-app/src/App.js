import CustomButton from './CustomButton';
import './App.css';
import './CustomButton.css';

function App() {
  return (
    <div className="App">
      <CustomButton className={'i-button'} text={'I'} />
      <CustomButton className={'know-button'} text={'know'} />
      <CustomButton className={'react-button'} text={'React!'} />
    </div>
  );
}

export default App;
