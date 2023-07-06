export default function FilteredItems(props) {
  //Lowercase each string
  const lowerCaseList = props.list.map((element) => element.toLowerCase());
  const lowerCaseInputString = props.string.toLowerCase();

  //Create array of filtered <li> element with each string
  const filteredList = [];

  console.log(props.string);

  for (let i = 0; i < props.list.length; i++) {
    if (lowerCaseList[i].includes(lowerCaseInputString)) {
      let item = <li key={props.list[i]}>{props.list[i]}</li>;
      filteredList.push(item);
    } else if (props.string === '') {
      let item = <li key={props.list[i]}>{props.list[i]}</li>;
      filteredList.push(item);
    }
  }

  console.log(filteredList);

  return <ul className="filtered-list">{filteredList}</ul>;
}
