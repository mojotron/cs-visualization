import { PriorityQueueType, NodeArrayType } from '../types';

const Node = <T>(priority: number, value: T): NodeArrayType<T> => {
  return { priority, value };
};

// Heap           | enqueue() | dequeue() | peek()
// Time Complexity|  O(lon n) |  O(log n) |  O(1)

// min priority implementation
const PriorityQueueHeap = <T>(): PriorityQueueType<T> => {
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

  const isLower = (childIndex: number, parentIndex: number): boolean => {
    return queue[childIndex].priority < queue[parentIndex].priority;
  };

  const bubbleDown = (index: 0) => {
    let position: number = index;
    while (queue[position * 2 + 1]) {
      const leftChild = 2 * position + 1;
      const rightChild = 2 * position + 2;
      let lowestIndex: number = position;

      if (queue[leftChild] && isLower(leftChild, position))
        lowestIndex = leftChild;

      if (queue[rightChild] && isLower(rightChild, lowestIndex))
        lowestIndex = rightChild;

      if (lowestIndex !== position) {
        const swap = queue[lowestIndex];
        queue[lowestIndex] = queue[position];
        queue[position] = swap;
        position = lowestIndex;
      } else {
        break;
      }
    }
  };

  const pull = (): undefined | T => {
    if (isEmpty()) return undefined;
    const { value } = queue[0];
    const last = queue.pop() as NodeArrayType<T>;
    if (!isEmpty()) {
      queue[0] = last;
      bubbleDown(0);
    }
    return value;
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

  return {
    get size() {
      return queue.length;
    },
    isEmpty,
    insert,
    pull,
    peek,
  };
};

export default PriorityQueueHeap;
