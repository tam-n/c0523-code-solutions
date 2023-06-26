/* exported reverseWords */
function reverseWords(string) {
  const array = string.split(' ');
  const reverseArray = [];
  let reverse = '';
  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    for (let j = word.length - 1; j >= 0; j--) {
      reverse += word[j];
    }
    reverseArray.push(reverse);
    reverse = '';
  }
  return reverseArray.join(' ');
}
