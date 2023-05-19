import { LinkedList, SingleNode } from '../types';

const Node = <T>(value: T): SingleNode<T> => {
  return {
    value,
    next: null,
  };
};

const CircularSinglyLinkedList = <T>(): LinkedList<T> => {
  let size = 0;
  let head: null | SingleNode<T> = null;
  let tail: null | SingleNode<T> = null;

  const forEach = (callback: (value: T, index: number) => void) => {
    let pointer = head;
    let position = 0;
    while (position < size) {
      callback(pointer!.value, position);
      pointer = pointer!.next;
      position += 1;
    }
  };

  // add node
  const addFirstNode = (value: T) => {
    const newNode = Node(value);
    head = newNode;
    tail = head;
    tail.next = head;
    size += 1;
    return size;
  };

  const append = (value: T): number => {
    if (size === 0 && head === null && tail === null)
      return addFirstNode(value);
    const newNode = Node(value);
    newNode.next = head;
    tail!.next = newNode;
    tail = newNode;
    size += 1;

    return size;
  };

  const prepend = (value: T) => {
    if (size === 0 && head === null && tail === null)
      return addFirstNode(value);
    const newNode = Node(value);
    newNode.next = head;
    tail!.next = newNode;
    head = newNode;
    size += 1;
    return size;
  };

  const insert = (index: number, value: T) => {
    if (index < 0 || index > size) return undefined;
    if (index === 0) return prepend(value);
    if (index === size) return append(value);

    let pointer = head;
    let position = 0;
    while (position < index - 1) {
      pointer = pointer!.next;
      position += 1;
    }
    const shift = pointer!.next;
    const newNode = Node(value);
    newNode.next = shift;
    pointer!.next = newNode;
    size += 1;
    return size;
  };
  // remove node
  const removeFirstItem = () => {
    const { value } = head as SingleNode<T>;
    head = null;
    tail = null;
    size = 0;
    return value;
  };

  const pop = () => {
    if (size === 0 && head === null) return undefined;
    if (size === 1 && head?.value === tail?.value) return removeFirstItem();

    let position = 0;
    let parent = head;
    let pointer = head;

    while (position < size - 1) {
      parent = pointer;
      pointer = pointer!.next;
      position += 1;
    }

    tail = parent;
    tail!.next = head;
    size -= 1;
    return pointer!.value;
  };

  const shift = () => {
    if (size === 0 && head === null) return undefined;
    if (size === 1 && head?.value === tail?.value) return removeFirstItem();
    const { value } = head as SingleNode<T>;
    const newHead = head!.next;
    head = newHead;
    tail!.next = head;
    size -= 1;
    return value;
  };

  const deleteAt = (index: number) => {
    if (index < 0 || index > size - 1) return undefined;
    if (index === 0) return shift();
    if (index === size - 1) return pop();

    let pointer = head;
    for (let i = 0; i < index - 1; i += 1) {
      pointer = pointer?.next as SingleNode<T>;
    }

    const deletedNode = pointer?.next;
    pointer!.next = deletedNode!.next;
    size -= 1;
    return deletedNode?.value;
  };

  const print = () => {
    const result: T[] = [];
    forEach((value) => {
      result.push(value);
    });
    let stringResult: string;
    if (result.length > 0) {
      stringResult = `${result.join(' -> ')} -> HEAD(${tail?.next?.value})`;
    } else {
      stringResult = 'empty';
    }
    return stringResult;
  };

  const search = (callback: (ele: T, index: number) => boolean) => {
    if (head === null) return undefined;
    let position = 0;
    let pointer = head;
    while (position < size) {
      if (callback(pointer.value, position)) return pointer.value;
      pointer = pointer?.next as SingleNode<T>;
      position += 1;
    }
    return undefined;
  };
  const reverse = () => {
    const reversed = CircularSinglyLinkedList<T>();
    const stack: T[] = [];
    forEach((value) => stack.push(value));
    while (stack.length > 0) {
      reversed.append(stack.pop() as T);
    }
    return reversed;
  };

  const reverseInPlace = () => {
    let prev = null;
    let current = head;

    do {
      const nextNode = current!.next;
      current!.next = prev;
      prev = current;
      current = nextNode;
    } while (current !== head);

    tail = head;
    head!.next = prev;
    head = prev;
  };

  const sort = () => {
    return null;
  };

  return {
    get length(): number {
      return size;
    },
    get head(): T | null {
      if (head?.value) return head.value;
      return null;
    },
    get tail(): T | null {
      if (tail?.value) return tail.value;
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

export default CircularSinglyLinkedList;
