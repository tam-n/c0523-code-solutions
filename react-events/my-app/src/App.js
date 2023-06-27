import './App.css';
import CustomButton from './CustomButton';

function App() {
  let handleCustomClick = (text) => {
    window.alert(text);
  };

  return (
    <div className="App">
      <CustomButton
        text={'First Button'}
        style={{ color: 'red' }}
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text={'Second Button'}
        style={{ color: 'blue' }}
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text={'Third Button'}
        style={{ color: 'green' }}
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
