export function getFront(queue) {
  return queue.peek() === undefined ? undefined : queue.peek();
}

export function addToBack(queue, value) {
  queue.enqueue(value);
}

export function takeFront(queue) {
  return queue.peek() === undefined ? undefined : queue.dequeue();
}

export function isEmpty(queue) {
  const fontValue = queue.peek();
  return typeof fontValue === 'undefined';
}
