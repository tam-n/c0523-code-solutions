export function getTop(stack) {
  return stack.index === 0 ? undefined : stack.peek();
}

export function addToTop(stack, value) {
  stack.push(value);
}

export function takeTop(stack) {
  return stack.index === 0 ? undefined : stack.pop(stack);
}

export function isEmpty(stack) {
  const topElement = stack.peek();
  return typeof topElement === 'undefined';
}
