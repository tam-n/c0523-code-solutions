export default function DisplayNoMatch(props) {
  //Lowercase each string
  const lowerCaseList = props.list.map((element) => element.toLowerCase());
  const lowerCaseInputString = props.string.toLowerCase();

  let message = 'No items match the filter.';
  for (let i = 0; i < props.list.length; i++) {
    if (lowerCaseList[i].includes(lowerCaseInputString)) {
      message = '';
    }
  }

  return <div className="no-items">{message}</div>;
}
