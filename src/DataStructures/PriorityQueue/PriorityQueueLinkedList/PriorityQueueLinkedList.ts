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

// max priority implementation
const PriorityQueueLinkedList = <T>(): PriorityQueueType<T> => {
  let queueSize = 0;
  let queue: null | NodeLinkedListType<T> = null;

  const isEmpty = (): boolean => {
    return queue === null;
  };

  const insert = (priority: number, value: T): void => {
    const newNode = Node(priority, value);
    if (queue === null) {
      queue = newNode;
    } else if (priority > queue.priority) {
      newNode.next = queue;
      queue = newNode;
    } else {
      let pointer = queue;
      // insert node before pointer but after node with same priority
      while (pointer.next !== null && priority <= pointer.next.priority) {
        pointer = pointer.next;
      }
      newNode.next = pointer.next;
      pointer.next = newNode;
    }
    queueSize += 1;
  };

  const pull = (): undefined | T => {
    if (queue === null) return undefined;
    const { value } = queue;
    queue = queue.next;
    queueSize -= 1;
    return value;
  };

  const peek = (): undefined | T => {
    if (queue === null) return undefined;
    const topPriority = queue.value;
    if (typeof topPriority === 'object' && Array.isArray(topPriority))
      return [...topPriority] as T;
    if (typeof topPriority === 'object' && !Array.isArray(topPriority))
      return { ...topPriority } as T;
    return topPriority;
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
