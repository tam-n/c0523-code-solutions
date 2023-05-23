let click = 0;

const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  click++;
  $clickCount.textContent = `Clicks: ${click}`;
  switch (click) {
    case 0:
      $hotButton.className = 'hot-button cold';
      break;
    case 4:
      $hotButton.className = 'hot-button cool';
      break;
    case 7:
      $hotButton.className = 'hot-button tepid';
      break;
    case 10:
      $hotButton.className = 'hot-button warm';
      break;
    case 13:
      $hotButton.className = 'hot-button hot';
      break;
    case 16:
      $hotButton.className = 'hot-button nuclear';
      break;
  }
  console.log($hotButton);
});
