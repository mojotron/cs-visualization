import Stack from '../Stack/stack';
import { QueueType } from './queue';

function QueueWithStacks<T>(maxSize: number): QueueType<T> {
  const maxLength = maxSize;
  const enqueueStack = Stack<T>();
  const dequeueStack = Stack<T>();

  const queueLength = () => enqueueStack.size() + dequeueStack.size();

  const enqueue = (value: T): number => {
    // not costly => O(1)
    if (queueLength() === maxLength)
      throw new Error(
        `queue is full, max size(${maxLength}), current size(${queueLength()})`
      );
    enqueueStack.push(value);
    return queueLength();
  };

  const dequeue = (): T | undefined => {
    // costly => O(n)
    if (enqueueStack.isEmpty() && dequeueStack.isEmpty()) return undefined;
    // move all elements from enqueue Stack to dequeues Stack to turn over sides
    if (!enqueueStack.isEmpty() && dequeueStack.isEmpty()) {
      while (!enqueueStack.isEmpty()) {
        const top = enqueueStack.pop();
        if (top !== undefined) dequeueStack.push(top);
      }
    }
    return dequeueStack.pop();
  };

  const front = (): T | undefined => {
    if (enqueueStack.isEmpty() && dequeueStack.isEmpty()) return undefined;
    if (!enqueueStack.isEmpty() && dequeueStack.isEmpty())
      return enqueueStack.bottom();
    if (enqueueStack.isEmpty() && !dequeueStack.isEmpty())
      return dequeueStack.top();
    if (!enqueueStack.isEmpty() && !dequeueStack.isEmpty())
      return dequeueStack.top();
  };

  const rear = (): T | undefined => {
    if (enqueueStack.isEmpty() && dequeueStack.isEmpty()) return undefined;
    if (!enqueueStack.isEmpty() && dequeueStack.isEmpty())
      return enqueueStack.top();
    if (enqueueStack.isEmpty() && !dequeueStack.isEmpty())
      return dequeueStack.bottom();
    if (!enqueueStack.isEmpty() && !dequeueStack.isEmpty())
      return dequeueStack.bottom();
  };

  const isEmpty = (): boolean => queueLength() === 0;

  const isFull = (): boolean => queueLength() === maxLength;

  const size = (): number => queueLength();

  return {
    enqueue,
    dequeue,
    front,
    rear,
    isEmpty,
    isFull,
    size,
  };
}

export default QueueWithStacks;
