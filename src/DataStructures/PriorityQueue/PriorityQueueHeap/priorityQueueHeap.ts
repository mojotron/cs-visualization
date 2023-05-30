import { PriorityQueueType, NodeArrayType } from '../types';

const Node = <T>(priority: number, value: T): NodeArrayType<T> => {
  return { priority, value };
};

// Heap           | enqueue() | dequeue() | peek()
// Time Complexity|  O(lon n) |  O(log n) |  O(1)

// min priority implementation
const PriorityQueueHeap = <T>(): PriorityQueueType<T> & {
  stringify: () => string;
} => {
  const queue: NodeArrayType<T>[] = []; // heap

  const isEmpty = (): boolean => {
    return queue.length === 0;
  };

  const bubbleUp = (index: number) => {
    let position = index;
    while (position > 0) {
      const parentIndex = Math.floor((position - 1) / 2);
      if (queue[position].priority < queue[parentIndex].priority) {
        const swap = queue[position];
        queue[position] = queue[parentIndex];
        queue[parentIndex] = swap;
        position = parentIndex;
      } else {
        break;
      }
    }
  };

  const insert = (priority: number, value: T): void => {
    const newNode = Node(priority, value);
    queue.push(newNode);
    bubbleUp(queue.length - 1);
  };

  const bubbleDown = () => {};

  const pull = (): undefined | T => {
    if (isEmpty()) return undefined;
    const last = queue.pop();
    return last?.value;
  };

  const peek = (): undefined | T => {
    if (isEmpty()) return undefined;
    const topPriority = queue[0].value;
    if (typeof topPriority === 'object' && Array.isArray(topPriority))
      return [...topPriority] as T;
    if (typeof topPriority === 'object' && !Array.isArray(topPriority))
      return { ...topPriority } as T;
    return topPriority;
  };

  const stringify = (): string => {
    const result: string[] = [];
    queue.forEach((ele) => {
      result.push(`[${ele.priority}|${ele.value}]`);
    });

    return result.join(' ');
  };

  return {
    get size() {
      return queue.length;
    },
    isEmpty,
    insert,
    pull,
    peek,
    //
    stringify,
  };
};

export default PriorityQueueHeap;
