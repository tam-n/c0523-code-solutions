/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const first = firstString.split('').sort().join('').trim();
  const second = secondString.split('').sort().join('').trim();
  return first === second;
}
