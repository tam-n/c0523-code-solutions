/* exported defaults */
function defaults(target, source) {
  for (const sourceKey in source) {
    if (!Object.hasOwn(target, sourceKey)) {
      target[sourceKey] = source[sourceKey];
    }
  }
}
