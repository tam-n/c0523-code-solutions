import './App.css';
import SearchableList from './SearchableList';

const strings = [
  'Fight for the First Lands!',
  'Of course I can fight. I grew up with four siblings!',
  "Give them an inch, they'll take a kingdom.",
  'I remember when I danced for fun.',
  'Dig in! This is where we make our stand!',
  'For the bones of our fathers, and the temples of our gods!',
  'I will light their lanterns. They will see victory.',
  "You know what it's like to lose everything. So you know why I must fight.",
  "Your 'peace' leads to nothing but extermination!",
  "You do not know burden until you've seen a thousand people hanging on your every word.",
];

function App() {
  return (
    <div className="App">
      <SearchableList list={strings} />
    </div>
  );
}

export default App;
