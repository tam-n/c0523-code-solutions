/* exported ransomCase */
function ransomCase(string) {
  const upperCaseWord = string.toUpperCase();
  let newWord = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newWord += upperCaseWord[i].toLowerCase();
    } else {
      newWord += upperCaseWord[i];
    }
  }
  return newWord;
}
