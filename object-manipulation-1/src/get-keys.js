/* exported getKeys */
function getKeys(object) {
  const keysArray = [];
  for (const keys in object) {
    keysArray.push(keys);
  }
  return keysArray;
}
