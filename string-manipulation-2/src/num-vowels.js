/* exported numVowels */
function numVowels(string) {
  const lowerCaseString = string.toLowerCase();
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      lowerCaseString[i] === 'a' ||
      lowerCaseString[i] === 'e' ||
      lowerCaseString[i] === 'i' ||
      lowerCaseString[i] === 'o' ||
      lowerCaseString[i] === 'u'
    ) {
      counter += 1;
    }
  }
  return counter;
}
