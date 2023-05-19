import { LinkedList, DoubleNode } from '../types';

const Node = <T>(value: T): DoubleNode<T> => {
  return { value, next: null, prev: null };
};

const CircularDoublyLinkedList = <T>(): LinkedList<T> => {
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
  };

  const append = (value: T) => {
    if (size === 0 && head === null && tail === null)
      return addFirstNode(value);
    return size;
  };
  const prepend = (value: T) => {
    if (size === 0 && head === null && tail === null)
      return addFirstNode(value);
    return size;
  };
  const insert = (index: number, value: T) => {
    if (size === 0 && head === null && tail === null)
      return addFirstNode(value);
    return size;
  };
  const pop = () => {
    return undefined;
  };
  const shift = () => {
    return undefined;
  };
  const deleteAt = () => {
    return undefined;
  };

  const forEach = (callback: (value: T, index: number) => void) => {
    let pointer = head;
    for (let i = 0; i < size; i += 1) {
      callback(pointer!.value, i);
      pointer = pointer!.next as DoubleNode<T>;
    }
  };

  const print = () => {
    const result: T[] = [];
    forEach((value) => result.push(value));

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
    return head;
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
