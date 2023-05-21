import { LinkedList, DoubleNode, DoublyForEach } from '../types';

const Node = <T>(value: T): DoubleNode<T> => {
  return { value, next: null, prev: null };
};

const CircularDoublyLinkedList = <T>(): LinkedList<T> & DoublyForEach<T> => {
  let size = 0;
  let head: null | DoubleNode<T> = null;
  let tail: null | DoubleNode<T> = null;

  // add node
  const addFirstNode = (value: T) => {
    head = Node(value);
    tail = head;
    tail.next = head;
    head.prev = tail;
    size += 1;
    return size;
  };

  const append = (value: T) => {
    if (size === 0 && head === null && tail === null)
      return addFirstNode(value);
    const newNode = Node(value);
    newNode.next = head;
    head!.prev = newNode;
    tail!.next = newNode;
    newNode.prev = tail;
    tail = newNode;
    size += 1;
    return size;
  };
  const prepend = (value: T) => {
    if (size === 0 && head === null && tail === null)
      return addFirstNode(value);
    const newNode = Node(value);
    head!.prev = newNode;
    newNode.next = head;
    newNode.prev = tail;
    tail!.next = newNode;
    head = newNode;
    size += 1;
    return size;
  };
  const insert = (index: number, value: T) => {
    if (index < 0 || index > size) return undefined;
    if (index === 0) return prepend(value);
    if (index === size) return append(value);

    const half = Math.floor(size / 2);
    const direction = half <= index ? 'head' : 'tail';

    let position = direction === 'head' ? 0 : size - 1;
    let pointer = direction === 'head' ? head : tail;
    while (position !== index - 1) {
      position += direction === 'head' ? 1 : -1;
      pointer = direction === 'head' ? pointer!.next : pointer!.prev;
    }

    const newNode = Node(value);
    const nextNode = pointer?.next as DoubleNode<T>;
    pointer!.next = newNode;
    newNode.prev = pointer;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    size += 1;
    return size;
  };
  // remove element
  const removeFirstNode = () => {
    const { value } = head as DoubleNode<T>;
    head = null;
    tail = null;
    size = 0;
    return value;
  };

  const pop = () => {
    if (size === 0) return undefined;
    if (size === 1 && head === tail) return removeFirstNode();
    const { value } = tail as DoubleNode<T>;
    const prevNode = tail?.prev;
    prevNode!.next = head;
    head!.prev = prevNode as DoubleNode<T>;
    tail = prevNode as DoubleNode<T>;
    size -= 1;
    return value;
  };
  const shift = () => {
    if (size === 0) return undefined;
    if (size === 1 && head === tail) return removeFirstNode();
    const { value } = head as DoubleNode<T>;
    const nextNode = head!.next;
    nextNode!.prev = tail;
    tail!.next = nextNode;
    head = nextNode;
    size -= 1;
    return value;
  };
  const deleteAt = (index: number) => {
    if (head === null || index < 0 || index > size - 1) return undefined;
    if (index === 0) return shift();
    if (index === size - 1) return pop();

    const half = Math.floor(size / 2);
    const direction = half <= index ? 'head' : 'tail';
    let position = direction === 'head' ? 0 : size - 1;
    let pointer = direction === 'head' ? head : tail;

    while (position !== index) {
      position += direction === 'head' ? 1 : -1;
      pointer = direction === 'head' ? pointer!.next : pointer!.prev;
    }

    const { value } = pointer as DoubleNode<T>;
    const prevNode = pointer?.prev as DoubleNode<T>;
    const nextNode = pointer?.next as DoubleNode<T>;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    // remove form memory
    pointer!.next = null;
    pointer!.prev = null;
    size -= 1;
    return value;
  };

  const forEach = (
    startFrom: 'head' | 'tail',
    callback: (value: T, index: number) => void
  ) => {
    let position = startFrom === 'head' ? 0 : size - 1;
    let pointer = startFrom === 'head' ? head : tail;
    const stopCondition = startFrom === 'head' ? size : -1;

    while (position !== stopCondition) {
      callback(pointer!.value, position);
      position += startFrom === 'head' ? 1 : -1;
      pointer = startFrom === 'head' ? pointer!.next : pointer!.prev;
    }
  };

  const print = () => {
    const result: T[] = [];
    forEach('head', (value) => result.push(value));

    if (result.length > 0) {
      return `TAIL(${head?.prev?.value}) <- ${result.join(
        ' <-> '
      )} ->${''} HEAD(${tail?.next?.value})`;
    }
    return 'empty';
  };

  const search = (callback: (ele: T, index: number) => boolean) => {
    return undefined;
  };
  const reverse = () => {
    const reversed = CircularDoublyLinkedList<T>();
    forEach('tail', (value) => reversed.append(value));
    return reversed;
  };
  const reverseInPlace = () => {
    return head;
  };
  const sort = () => {
    return head;
  };

  return {
    get length(): number {
      return size;
    },
    get head(): T | null {
      return null;
    },
    get tail(): T | null {
      return null;
    },
    append,
    prepend,
    insert,
    pop,
    shift,
    deleteAt,
    forEach,
    print,
    search,
    reverse,
    reverseInPlace,
    sort,
  };
};

export default CircularDoublyLinkedList;
