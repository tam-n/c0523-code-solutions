let counter = 0;
const $button = document.querySelector('.button-on');
const $background = document.querySelector('.container-on');

$button.addEventListener('click', function (event) {
  counter++;
  if (counter % 2 === 0) {
    $button.className = 'button-on';
    $background.className = 'container-on';
  } else {
    $button.className = 'button-off';
    $background.className = 'container-off';
  }
});
