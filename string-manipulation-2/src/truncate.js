/* exported truncate */
function truncate(length, string) {
  let newString = '';
  if (string.length > length) {
    for (let i = 0; i < length; i++) {
      newString += string[i];
    }
  } else if (string.length < length) {
    newString = string;
  }
  return newString + '...';
}
