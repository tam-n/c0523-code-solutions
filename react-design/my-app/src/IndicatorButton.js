export default function IndicatorButton(props) {
  const buttons = props.items.map((animal, index) => (
    <button key={animal} onClick={() => props.onCustomClick(index)}>
      {index}
    </button>
  ));

  return <div className="indicator-buttons-wrapper">{buttons}</div>;
}
