export default function CustomButton(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      onClick={() => props.onCustomClick(props.text)}>
      {props.text}
    </button>
  );
}
