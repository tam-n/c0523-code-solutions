export default function ItemName(props) {
  const selectedAnimal = <span>{props.items[props.index]}</span>;

  return <div>{selectedAnimal}</div>;
}
