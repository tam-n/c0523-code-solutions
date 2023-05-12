/* exported capitalizeWords */
function capitalizeWords(string) {
  const words = string.split(' ');
  let newString = '';
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
  }
  newString = words.join(' ');
  return newString;
}
