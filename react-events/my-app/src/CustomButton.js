export default function CustomButton(props) {
  return (
    <button style={props.color} onClick={() => props.onCustomClick(props.text)}>
      {props.text}
    </button>
  );
}
