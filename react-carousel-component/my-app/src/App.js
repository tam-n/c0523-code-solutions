import './App.css';
import Carousel from './Carousel';

const imagesPath = [
  '/images/irelia.jpg',
  '/images/lux.jpg',
  '/images/teemo.jpg',
];

function App() {
  return (
    <div className="App">
      <Carousel images={imagesPath} />
    </div>
  );
}

export default App;
