export default function IndicatorButton(props) {
  const buttons = props.items.map((animal, index) => {
    return <button key={animal}>{index}</button>;
  });
  return <div className="indicator-buttons-wrapper">{buttons}</div>;
}
