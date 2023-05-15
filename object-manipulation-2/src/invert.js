/* exported invert */
function invert(source) {
  const newObj = {};
  for (const objName in source) {
    newObj[source[objName]] = objName;
  }
  return newObj;
}
