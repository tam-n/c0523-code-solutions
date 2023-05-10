// THE MATH OBJECT
const num1 = 7;
const num2 = 14;
const num3 = 95;
const maximumValue = Math.max(num1, num2, num3);
console.log('The maxium value is:', maximumValue);

const heroes = ['Scarlet Witch', 'Dr. Strange', 'Spider Man', 'Thor'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('The random index is:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('The random hero is:', randomHero);

// ARRAY METHODS
const library = [
  { title: 'The Road', author: 'Cormac McCarthy' },
  { title: 'Of Mice and Men', author: 'John Steinbeck' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

// removes the element and returns it
const lastBook = library.pop();
console.log('The last book is:', lastBook);
// removes the first element and returns it
const firstBook = library.shift();
console.log('The first book is:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

// adds element to end of array
library.push(js);
// adds element to front of array
library.unshift(css);
// .splice(index, deletecount, itemN)
library.splice(1, 1);
console.log('The new library is:', library);

// STRING METHODS

const fullName = 'Tam Nguyen';
const firstAndLastName = fullName.split(' ');
console.log('The first and last name is:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('The value of sayMyName is:', sayMyName);
