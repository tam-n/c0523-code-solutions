import takeAChance from './take-a-chance.js';

takeAChance('Tam')
  .then((value) => console.log(value))
  .catch((error) => console.error(error.message));
