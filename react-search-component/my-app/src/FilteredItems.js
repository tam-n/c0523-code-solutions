export default function FilteredItems(props) {
  const filteredList = props.list.map((element) => {
    return <li key={element}>{element}</li>;
  });
  return <ul>{filteredList}</ul>;
}
