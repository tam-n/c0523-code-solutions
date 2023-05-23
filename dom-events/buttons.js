function handleClick(event) {
  console.log('Button clicked');
  console.log('Button clicked event:', event);
  console.log('Target property:', event.target);
}
const $clickButton = document.querySelector('button.click-button');
$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('Button hovered');
  console.log('Button hovered event:', event);
  console.log('Target property:', event.target);
}
const $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('Button double-clicked');
  console.log('Button double-clicked event:', event);
  console.log('Target property:', event.target);
}
const $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
