const $tab = document.querySelectorAll('.tab');
const $dot = document.querySelectorAll('.dots');
const $dotRow = document.querySelector('#dots');
const $arrows = document.querySelector('.image-row');

let imageIndex = 0;
function indexRotation() {
  if (imageIndex < 0) {
    imageIndex += $tab.length;
  } else if (imageIndex > $tab.length - 1) {
    imageIndex = 0;
  }
}

$arrows.addEventListener('click', function (event) {
  if (event.target.matches('.left')) {
    imageIndex--;
    indexRotation();
    swapView();
    resetInterval();
  } else if (event.target.matches('.right')) {
    imageIndex++;
    indexRotation();
    swapView();
    resetInterval();
  }
});

function swapView() {
  for (let i = 0; i < $tab.length; i++) {
    if ($tab[i] === $tab[imageIndex]) {
      $tab[imageIndex].classList.remove('hidden');
      $dot[imageIndex].className = 'fa-solid fa-circle fa-lg dots';
    } else {
      $tab[i].classList.add('hidden');
      $dot[i].className = 'fa-regular fa-circle fa-lg dots';
    }
  }
}

function autoSwapView() {
  console.log('running');
  imageIndex++;
  if (imageIndex === $tab.length) {
    imageIndex = 0;
  }
  swapView();
}

let intervalId;

function startInterval() {
  intervalId = setInterval(autoSwapView, 3000);
}

function resetInterval() {
  clearInterval(intervalId);
  setTimeout(startInterval, 0);
}

startInterval();

$dotRow.addEventListener('click', function (event) {
  if (event.target.matches('.dots')) {
    const strIndex = event.target.getAttribute('data-view-index');
    const numIndex = parseInt(strIndex);
    imageIndex = numIndex;
    resetInterval();
    swapView();
  }
});
