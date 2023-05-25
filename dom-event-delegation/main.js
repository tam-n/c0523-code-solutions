const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (event) {
  console.log(
    'event target:',
    event.target,
    'event target tag name:',
    event.target.tagName
  );
  if (event.target.tagName === 'BUTTON') {
    const $item = event.target.closest('.task-list-item');
    console.log($item);
    $item.remove();
  }
});
