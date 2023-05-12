/* exported lastChars */
function lastChars(length, string) {
  let tempWord = '';
  let newWord = '';
  if (length > string.length) {
    return string;
  } else if (length < string.length) {
    for (let i = string.length - 1; i >= 0 && length > 0; i-- && length--) {
      tempWord += string[i];
    }
  }
  for (let i = tempWord.length - 1; i >= 0; i--) {
    newWord += tempWord[i];
  }
  return newWord;
}
