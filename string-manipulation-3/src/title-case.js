/* exported titleCase */
function titleCase(title) {
  let words = title.split(' ');
  const exceptions = [
    'and',
    'nor',
    'the',
    'for',
    'per',
    'or',
    'a',
    'an',
    'as',
    'at',
    'by',
    'in',
    'of',
    'on',
    'per',
    'to',
  ];
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (!exceptions.includes(word)) {
      word = word[0].toUpperCase() + word.substr(1).toLowerCase();
    }
    words[i] = word;
  }
  words = words.join(' ');
  words = words.split(':');
  if (words.length > 1) {
    words[0] = words[0] + `:`;
    words.forEach((element, index) => {
      element = element.trim();
      element = element[0].toUpperCase() + element.substr(1);
      words[index] = element;
    });
  }
  words = words.join(' ');
  words = words.split('-');
  if (words.length > 1) {
    words[0] = words[0] + '-';
    words.forEach((element, index) => {
      element = element.trim();
      element = element[0].toUpperCase() + element.substr(1);
      words[index] = element;
    });
  }
  words = words.join('');
  words = words.split(' ');
  words.forEach((element, index) => {
    if (element.toLowerCase().replace(':', '') === 'javascript') {
      element = 'JavaScript' + element.substr(10);
      words[index] = element;
    } else if (element.toLowerCase().replace(':', '') === 'api') {
      element = 'API' + element.substr(3);
      words[index] = element;
    } else {
      words[index] = element;
    }
  });
  words = words.join(' ');
  words = words[0].toUpperCase() + words.substr(1);
  return words;
}
