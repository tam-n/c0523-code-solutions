/* exported firstChars */
function firstChars(length, string) {
  let newWord = '';
  if (length > string.length) {
    newWord = string;
  } else if (length < string.length) {
    for (let i = 0; i < length; i++) {
      newWord += string[i];
    }
  }
  return newWord;
}
