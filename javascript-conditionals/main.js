/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  return number % 2 > 0;
}

function startsWithJ(string) {
  return string[0] === 'J';
}

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      console.log("We're the warner brothers!");
      break;
    case 'wakko':
      console.log("We're the warner brothers!");
      break;
    case 'dot':
      console.log("I'm cute~");
      break;
    default:
      console.log('Goodnight everybody!');
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Die Hard');
      break;
    case 'comedy':
      console.log('White Chicks');
      break;
    case 'horror':
      console.log('Sinister');
      break;
    case 'drama':
      console.log('Titanic');
      break;
    case 'musical':
      console.log('Le Miserables');
      break;
    case 'sci-fi':
      console.log('Intersellar');
      break;
    default:
      console.log(
        'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi'
      );
  }
}
