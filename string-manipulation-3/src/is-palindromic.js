/* exported isPalindromic */
function isPalindromic(string) {
  const noSpace = string.split(' ').join('').toLowerCase();
  let reverse = '';
  for (let i = noSpace.length - 1; i >= 0; i--) {
    reverse += noSpace[i];
  }
  return reverse === noSpace;
}
