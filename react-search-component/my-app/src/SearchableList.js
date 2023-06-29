import FilteredItems from './FilteredItems';
import DisplayNoMatch from './DisplayNoMatch';

export default function SearchableList(props) {
  return (
    <div>
      <input type="search" placeholder="search"></input>
      <FilteredItems list={props.list} />
      <DisplayNoMatch />
    </div>
  );
}
