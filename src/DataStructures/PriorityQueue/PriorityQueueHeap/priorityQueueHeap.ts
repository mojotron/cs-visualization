import { PriorityQueueType, NodeArrayType } from '../types';

const Node = <T>(priority: number, value: T): NodeArrayType<T> => {
  return {priority, value}
}

// Heap           | enqueue() | dequeue() | peek()
// Time Complexity|  O(lon n) |  O(log n) |  O(1)

// min priority implementation
const PriorityQueueHeap = <T>(): PriorityQueueType<T> => {
  const queue: NodeArrayType<T>[] = []; // heap

  const isEmpty = (): boolean => {
    return queue.length === 0;
  };

  const bubbleUp = () => {};

  const insert = (priority: number, value: T): void => {};

  const bubbleDown = () => {};

  const pull = ():undefined | T => {};

  const peek = ():undefined | T => {
    if (isEmpty()) return undefined;
    const topPriority = queue[0].value;
    if (typeof topPriority === 'object' && Array.isArray(topPriority))
      return [...topPriority] as T;
    if (typeof topPriority === 'object' && !Array.isArray(topPriority))
      return { ...topPriority } as T;
    return topPriority;
  };

  return {
    get size() {return queue.length}
    isEmpty,
    insert,
    pull,
    peek,
  }
};

export default PriorityQueueHeap;
