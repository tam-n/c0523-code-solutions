export default function RegistrationFormUncontrolled(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    console.log('Uncontrolled', formValues);
  }
  return (
    <form className={props.className} onSubmit={handleSubmit}>
      <label>
        Username
        <input name="username"></input>
      </label>
      <label>
        Password
        <input name="password"></input>
      </label>
      <button typeof="submit">Submit</button>
    </form>
  );
}
