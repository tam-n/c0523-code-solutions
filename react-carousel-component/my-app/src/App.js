import './App.css';
import Carousel from './Carousel';

const imagesPath = [
  '/images/pikachu.jpg',
  '/images/bulbasaur.jpg',
  '/images/charmander.jpg',
  '/images/jigglypuff.jpg',
];

function App() {
  return (
    <div className="App">
      <Carousel images={imagesPath} />
    </div>
  );
}

export default App;
