import { LinkedList, DoubleNode } from '../types';

const CircularDoublyLinkedList = <T>(): LinkedList<T> => {
  let size = 0;
  const head: null | DoubleNode<T> = null;
  const tail: null | DoubleNode<T> = null;

  const append = () => {};
  const prepend = () => {};
  const insert = () => {};
  const pop = () => {};
  const shift = () => {};
  const deleteAt = () => {};
  const forEach = () => {};

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
  };
};
