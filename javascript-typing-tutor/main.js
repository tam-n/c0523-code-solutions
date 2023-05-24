const $string = document.querySelectorAll('span');
const $accuracy = document.querySelector('.accuracy');
const $accuracyWindow = document.querySelector('.accuracy-container-off');

let currentIndex = 0;
let wrongKeys = 0;
let numKeys = 0;

addEventListener('keydown', function (event) {
  numKeys++;
  if ($string[currentIndex].innerText === event.key) {
    $string[currentIndex].className = 'string-green';
    currentIndex++;
    if (currentIndex === $string.length) {
      $accuracy.innerText = `${((numKeys - wrongKeys) / numKeys) * 100}%`;
      $accuracyWindow.className = 'accuracy-container-on';
    }
    if ($string[currentIndex - 1].innerText === event.key) {
      $string[currentIndex].className = 'underline';
    }
  } else if ($string[currentIndex].innerText !== event.key) {
    $string[currentIndex].className = 'red';
    wrongKeys++;
  }
});
