/* exported capitalizeWord */
function capitalizeWord(word) {
  const lowerCaseWord = word.toLowerCase();
  let newWord = '';
  if (lowerCaseWord === 'javascript') {
    newWord = 'JavaScript';
  } else {
    newWord =
      lowerCaseWord[0].toUpperCase() + lowerCaseWord.substring(1).toLowerCase();
  }
  return newWord;
}
