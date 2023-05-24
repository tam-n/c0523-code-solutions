function handleFocusEvent(event) {
  console.log('Focus event fired!');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('Blur event fired!');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, 'value:', event.target.value);
}

const $formInput = document.querySelectorAll('input');
const $formTextArea = document.querySelector('textarea');

$formInput[0].addEventListener('focus', handleFocusEvent);
$formInput[0].addEventListener('blur', handleBlur);
$formInput[0].addEventListener('input', handleInput);

$formInput[1].addEventListener('focus', handleFocusEvent);
$formInput[1].addEventListener('blur', handleBlur);
$formInput[1].addEventListener('input', handleInput);

$formTextArea.addEventListener('focus', handleFocusEvent);
$formTextArea.addEventListener('blur', handleBlur);
$formTextArea.addEventListener('input', handleInput);

const $form = document.querySelector('#contact-form');

const formValues = {};

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  formValues.name = $form.elements.name.value;
  formValues.email = $form.elements.email.value;
  formValues.message = $form.elements.message.value;
  console.log(formValues);
  $form.reset();
});
