type NodeType<T> = {
  value: T;
  next: null | NodeType<T>;
};

function Node<T>(value: T): NodeType<T> {
  return {
    value,
    next: null,
  };
}

type SinglyLinkedListType<T> = {
  length: number;
  head: T | null;
  tail: T | null;
  append: (value: T) => number;
  prepend: (value: T) => number;
  insert: (index: number, value: T) => number | undefined;
  forEach: (callback: (value: T, index: number) => void) => void;
};

function SinglyLinkedList<T>(): SinglyLinkedListType<T> {
  let length = 0;
  let head: null | NodeType<T> = null;
  let tail: null | NodeType<T> = head;

  const addFirstNode = (value: T): number => {
    head = Node(value);
    tail = head;
    length += 1;
    return length;
  };
  // traverse
  const forEach = (callback: (value: T, index: number) => void): void => {
    let position = 0;
    let pointer = head;

    while (pointer) {
      callback(pointer.value, position);
      position += 1;
      pointer = pointer.next;
    }
    // pointer to null is not returned
  };

  // insertion
  const append = (value: T): number => {
    if (head === null) return addFirstNode(value);
    const newNode = Node(value);
    // TS The left-hand side of assignment expression may not be an optional property access
    tail!.next = newNode;
    tail = newNode;
    length += 1;
    return length;
  };

  const prepend = (value: T): number => {
    if (head === null) return addFirstNode(value);
    const newNode = Node(value);
    const shift = head;
    head = newNode;
    head.next = shift;
    length += 1;
    return length;
  };

  const insert = (index: number, value: T): number | undefined => {
    if (index < 0 || index > length) return;
    if (index === 0) return prepend(value);
    if (index === length) return append(value);

    let position = 0;
    let pointer = head;
    // insert before target pointer(index - 1)
    while (position < index - 1) {
      position += 1;
      pointer = pointer!.next;
    }

    const shift = pointer!.next;
    const newNode = Node(value);
    newNode.next = shift;
    pointer!.next = newNode;

    length += 1;
    return length;
  };

  return {
    // getters
    get head(): T | null {
      if (head?.value) return head.value;
      return null;
    },
    get tail(): T | null {
      if (tail?.value) return tail.value;
      return null;
    },
    get length(): number {
      return length;
    },
    // insertion
    append,
    prepend,
    insert,
    forEach,
  };
}

export default SinglyLinkedList;
