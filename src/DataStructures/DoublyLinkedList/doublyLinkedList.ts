type NodeType<T> = {
  value: T;
  next: NodeType<T> | null;
  prev: NodeType<T> | null;
};

function Node<T>(value: T) {
  return {
    value,
    next: null,
    prev: null,
  };
}

type DoublyLinkedListType<T> = {
  get head(): T | null;
  get tail(): T | null;
  get length(): number;
  forEach: (
    startFrom: 'head' | 'tail',
    callback: (value: T, index: number) => void
  ) => void;
  append: (value: T) => number;
  prepend: (value: T) => number;
  insert: (index: number, value: T) => number | undefined;
};

function DoublyLinkedList<T>(): DoublyLinkedListType<T> {
  let length = 0;
  let head: null | NodeType<T> = null;
  let tail: null | NodeType<T> = null;

  const isHead = (str: 'head' | 'tail') => str === 'head';

  const forEach = (
    startFrom: 'head' | 'tail',
    callback: (value: T, index: number) => void
  ) => {
    let pointer = isHead(startFrom) ? head : tail;
    let position = isHead(startFrom) ? 0 : length - 1;

    while (pointer) {
      callback(pointer.value, position);
      pointer = isHead(startFrom) ? pointer.next : pointer.prev;
      position += isHead(startFrom) ? 1 : -1;
    }
  };

  const addFirstElement = (value: T) => {
    const newNode = Node(value);
    head = newNode;
    tail = newNode;
    length += 1;
    return length;
  };

  // insertion
  const prepend = (value: T): number => {
    if (head === null) return addFirstElement(value);
    const shift = head;
    head = Node(value);
    head.next = shift;
    shift.prev = head;
    length += 1;
    return length;
  };

  const append = (value: T): number => {
    if (head === null) return addFirstElement(value);
    const newTail: NodeType<T> = Node(value);
    tail!.next = newTail;
    newTail.prev = tail;
    tail = newTail;
    length += 1;
    return length;
  };

  const insert = (index: number, value: T): number | undefined => {
    if (index < 0 || index > length) return undefined;
    if (index === 0) return prepend(value);
    if (index === length - 1) return append(value);

    // determine from which side to traverse to speed up insertion process
    const half = Math.floor(length / 2);
    const direction: 'head' | 'tail' = index <= half ? 'head' : 'tail';

    return length;
  };

  return {
    get head() {
      if (head?.value) return head.value;
      return null;
    },
    get tail() {
      if (tail?.value) return tail.value;
      return null;
    },
    get length() {
      return length;
    },
    // insertion
    prepend,
    append,
    insert,
    forEach,
  };
}

export default DoublyLinkedList;
