/* exported omit */
function omit(source, keys) {
  const newObj = {};
  for (const objName in source) {
    if (!keys.includes(objName)) {
      newObj[objName] = source[objName];
    }
  }
  return newObj;
}
