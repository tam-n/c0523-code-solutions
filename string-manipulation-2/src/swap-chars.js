/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const firstChar = string[firstIndex];
  const secondChar = string[secondIndex];
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += secondChar;
    } else if (i === secondIndex) {
      newString += firstChar;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
