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
  // insertion
  append: (value: T) => number;
  prepend: (value: T) => number;
  insert: (index: number, value: T) => number | undefined;
  // deletion
  pop: () => T | undefined;
  shift: () => T | undefined;
  deleteAt: (index: number) => T | undefined;
  // utility
  forEach: (
    startFrom: 'head' | 'tail',
    callback: (value: T, index: number) => void
  ) => void;
  print: () => void;
  search: (
    startFrom: 'head' | 'tail',
    callback: (value: T, index: number) => boolean
  ) => T | undefined;
  reverse: () => DoublyLinkedListType<T>;
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

  const removeFirstElement = (): T => {
    const { value } = head as NodeType<T>;
    head = null;
    tail = null;
    length = 0;
    return value;
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
    if (index === length) return append(value);

    // determine from which side to traverse to speed up insertion process
    const half = Math.floor(length / 2);
    const direction: 'head' | 'tail' = index <= half ? 'head' : 'tail';
    let position = isHead(direction) ? 0 : length - 1;
    let pointer = isHead(direction) ? head : tail;

    while (position !== index - 1) {
      position += isHead(direction) ? 1 : -1;
      pointer = isHead(direction) ? pointer!.next : pointer!.prev;
    }

    const shift = pointer!.next;
    const newNode: NodeType<T> = Node(value);
    pointer!.next = newNode;
    newNode!.prev = pointer;
    shift!.prev = newNode;
    newNode.next = shift;

    length += 1;
    return length;
  };

  // deletion
  const pop = (): T | undefined => {
    if (head === null) return undefined;
    if (length === 1) return removeFirstElement();

    const { value } = tail as NodeType<T>;
    const newTail = tail?.prev as NodeType<T>;
    tail!.prev = null;
    newTail!.next = null;
    tail = newTail;

    length -= 1;
    return value;
  };

  const shift = (): T | undefined => {
    if (head === null) return undefined;
    if (length === 1) return removeFirstElement();

    const { value } = head;
    const newHead = head.next as NodeType<T>;
    head.next = null;
    newHead.prev = null;
    head = newHead;

    length -= 1;
    return value;
  };

  const deleteAt = (index: number): T | undefined => {
    if (head === null || index < 0 || index > length - 1) return undefined;
    if (index === 0) return shift();
    if (index === length - 1) return pop();

    const half = Math.floor(length / 2);
    const direction: 'head' | 'tail' = index <= half ? 'head' : 'tail';
    let position = isHead(direction) ? 0 : length - 1;
    let pointer = isHead(direction) ? head : tail;

    while (position !== index) {
      position += isHead(direction) ? 1 : -1;
      pointer = isHead(direction) ? pointer!.next : pointer!.prev;
    }

    const { value } = pointer as NodeType<T>;
    const prevNode = pointer?.prev as NodeType<T>;
    const nextNode = pointer?.next as NodeType<T>;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    length -= 1;
    return value;
  };

  const print = () => {
    const result: (T | null)[] = [];
    forEach('head', (v) => result.push(v));
    result.push(null);
    console.log(result.join('->'));
  };

  const search = (
    startFrom: 'head' | 'tail',
    callback: (value: T, index: number) => boolean
  ): T | undefined => {
    let pointer = isHead(startFrom) ? head : tail;
    let position = isHead(startFrom) ? 0 : length - 1;

    while (pointer) {
      if (callback(pointer.value, position)) return pointer.value;
      pointer = isHead(startFrom) ? pointer.next : pointer.prev;
      position += isHead(startFrom) ? 1 : -1;
    }

    return undefined;
  };

  const reverse = (): DoublyLinkedListType<T> => {
    const reversed = DoublyLinkedList<T>();
    forEach('tail', (v) => reversed.append(v));
    return reversed;
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
    // deletion
    pop,
    shift,
    deleteAt,
    // utility
    forEach,
    print,
    search,
    reverse,
  };
}

export default DoublyLinkedList;
