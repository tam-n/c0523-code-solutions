export default function ItemName(props) {
  const namesArray = props.items.map((animal) => {
    return <span key={animal}>{animal}</span>;
  });

  return <div>{namesArray[0]}</div>;
}
