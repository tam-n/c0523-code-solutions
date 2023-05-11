/* exported getValues */
function getValues(object) {
  const valueArray = [];
  for (const keys in object) {
    valueArray.push(object[keys]);
  }
  return valueArray;
}
