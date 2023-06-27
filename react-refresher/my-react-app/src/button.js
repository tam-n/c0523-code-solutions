export default function MyButton(props) {
  return (
    <button className="button" onClick={props.onCustomClick}>
      {props.text}
    </button>
  );
}
