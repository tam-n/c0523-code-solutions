import { useState } from 'react';
import FilteredItems from './FilteredItems';
import DisplayNoMatch from './DisplayNoMatch';

export default function SearchableList(props) {
  const [inputString, setInputString] = useState('');

  return (
    <>
      <input
        type="search"
        image=""
        placeholder="search"
        className="search-bar"
        onChange={(e) => setInputString(e.target.value)}></input>
      <FilteredItems list={props.list} string={inputString} />
      <DisplayNoMatch list={props.list} string={inputString} />
    </>
  );
}
