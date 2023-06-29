export default function IndicatorButton(props) {
  const buttons = props.items.map((animal, index) => (
    <button
      className="indicator"
      key={animal}
      onClick={(e) => props.onCustomClick(index)}
      style={{
        backgroundColor: props.index === index ? 'lightblue' : 'white',
      }}>
      {index}
    </button>
  ));

  return <div className="indicator-buttons-wrapper">{buttons}</div>;
}
