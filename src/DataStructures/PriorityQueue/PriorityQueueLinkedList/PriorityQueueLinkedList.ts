import { PriorityQueueType, NodeLinkedListType } from '../types';

const Node = <T>(priority: number, value: T): NodeLinkedListType<T> => {
  return {
    priority,
    value,
    next: null,
  };
};

// Linked List    | enqueue() | dequeue() | peek()
// Time Complexity|    O(n)   |    O(1)   |  O(1)

// min priority implementation
const PriorityQueueLinkedList = <T>(): PriorityQueueType<T> => {
  const queueSize = 0;
  let queue: null | NodeLinkedListType<T> = null;

  const isEmpty = (): boolean => {
    return queue === null;
  };

  const insert = (priority: number, value: T): void => {
    // first node
    // insert before node if priority is grater
    // inset to the end if no higher priority found
  };

  const pull = (): undefined | T => {};

  const peek = (): undefined | T => {
    if (queue === null) return undefined;
  };

  return {
    get size() {
      return queueSize;
    },
    isEmpty,
    insert,
    pull,
    peek,
  };
};

export default PriorityQueueLinkedList;
