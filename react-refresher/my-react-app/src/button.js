export default function MyButton(props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}
