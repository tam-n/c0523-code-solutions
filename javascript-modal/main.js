const $openButton = document.querySelector('.open-modal-button');
const $noButton = document.querySelector('.no-button');
const $modal = document.querySelector('.modal-container-off');

$openButton.addEventListener('click', function (event) {
  $modal.className = 'modal-container-on';
});

$noButton.addEventListener('click', function () {
  $modal.className = 'modal-container-off';
});
