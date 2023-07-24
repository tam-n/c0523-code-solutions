import LinkedList from './lib/linked-list';

export function getHead(list) {
  return list.data;
}

export function updateHead(list, value) {
  list.data = value;
}

export function withoutHead(list) {
  let current = list.next;
  let newLinkedList = null;
  let newCurrent = null;

  while (current) {
    if (newLinkedList === null) {
      newLinkedList = new LinkedList(current.data);
      newCurrent = newLinkedList;
    } else {
      newCurrent.next = new LinkedList(current.data);
      newCurrent = newCurrent.next;
    }
    current = current.next;
  }

  return newLinkedList;
}

export function prepend(list, value) {
  const newList = new LinkedList(value);

  newList.next = list;

  return newList;
}
