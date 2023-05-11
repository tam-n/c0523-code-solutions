/* exported isVowel */
function isVowel(character) {
  const letter = character.toLowerCase();
  if (
    letter === 'a' ||
    letter === 'e' ||
    letter === 'i' ||
    letter === 'o' ||
    letter === 'u'
  ) {
    return true;
  } else {
    return false;
  }
}
