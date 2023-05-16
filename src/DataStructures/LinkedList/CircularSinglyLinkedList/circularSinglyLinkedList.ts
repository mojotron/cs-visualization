import { LinkedList, SingleNode } from '../types';

const CircularSinglyLinkedList = <T>(): LinkedList<T> => {
  let size = 0;
  const head: null | SingleNode<T> = null;
  const tail: null | SingleNode<T> = null;

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
