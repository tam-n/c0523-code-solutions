/* exported dropRight */
function dropRight(array, count) {
  const endIndex = Math.max(0, array.length - count);
  return array.slice(0, endIndex);
}
