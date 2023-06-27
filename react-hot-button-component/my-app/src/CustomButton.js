export default function CustomButton(props) {
  return (
    <button
      className={props.className}
      onClick={props.customOnClick}
      style={props.style}>
      {props.text}
    </button>
  );
}
