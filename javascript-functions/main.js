function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(
  'The number of seconds in 5 minutes is:',
  convertMinutesToSeconds(5)
);

function greet(name) {
  return 'Hey, ' + name;
}
console.log('Greetings to Shawn:', greet('Shawn'));

function getArea(width, height) {
  return width * height;
}
console.log('The area of on the rectangle:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log(
  'The first name is:',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

function getLastElement(array) {
  return array[array.length - 1];
}
console.log(
  'The last element in the array is:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
