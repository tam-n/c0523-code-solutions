/* exported pick */
function pick(source, keys) {
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    const objName = keys[i];
    if (Object.hasOwn(source, objName) && source[objName] !== undefined) {
      newObj[objName] = source[objName];
    }
  }
  return newObj;
}
