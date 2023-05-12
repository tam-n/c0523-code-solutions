/* exported takeRight */
function takeRight(array, count) {
  const startIndex = Math.max(0, array.length - count);
  return array.slice(startIndex);
}
