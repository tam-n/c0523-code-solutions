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
