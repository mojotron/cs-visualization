import { NodeArrayType, PriorityQueueType } from '../types';

const Node = <T>(priority: number, value: T): NodeArrayType<T> => ({
  priority,
  value,
});

// Arrays         | enqueue() | dequeue() | peek()
// Time Complexity|    O(1)   |    O(n)   |  O(n)

// max priority implementation
const PriorityQueueArray = <T>(): PriorityQueueType<T> => {
  let queue: NodeArrayType<T>[] = [];

  const isEmpty = (): boolean => {
    return queue.length === 0;
  };

  const insert = (priority: number, value: T): void => {
    queue.push(Node(priority, value));
  };
  // helpers
  const getTopPriorityIndex = () => {
    let topPriority = -Infinity;
    let index = -1;
    queue.forEach((ele, i) => {
      if (ele.priority > topPriority) {
        topPriority = ele.priority;
        index = i;
      }
    });
    return index;
  };
  //
  const pull = (): undefined | T => {
    if (isEmpty()) return undefined;
    const topPriorityIndex = getTopPriorityIndex();
    const { value } = queue[topPriorityIndex];
    queue = queue.filter((_, i) => i !== topPriorityIndex);
    return value;
  };

  const peek = (): undefined | T => {
    if (isEmpty()) return undefined;
    const topPriority = queue[getTopPriorityIndex()].value;
    if (typeof topPriority === 'object' && Array.isArray(topPriority))
      return [...topPriority] as T;

    if (typeof topPriority === 'object' && !Array.isArray(topPriority))
      return { ...topPriority };

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

export default PriorityQueueArray;
