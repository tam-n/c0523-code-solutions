const library = [
  {
    isbn: '9780307265432',
    title: 'The road',
    author: 'Cormac McCarthy',
  },
  {
    isbn: '9780439023481',
    title: 'The Hunger Games',
    author: 'Suzzanne Collins',
  },
  {
    isbn: '9780375706677',
    title: 'No Country For Old Men',
    author: 'Cormac McCarthy',
  },
];

console.log('Type of array of books:', typeof library);
console.log('Type of JSON stringify:', JSON.stringify(typeof Array));

const json = '{"id": "12345", "name": "Mary"}';
console.log('Type of JSON:', typeof json);

const jsonObject = JSON.parse(json);
console.log('Type of JSON parse:', jsonObject);
