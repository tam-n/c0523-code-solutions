/* exported getIndexes */
function getIndexes(array) {
  const index = [];
  let i = 0;
  while (array.length - 1 >= i) {
    index.push(i);
    i++;
  }
  return index;
}
