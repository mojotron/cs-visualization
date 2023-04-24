type NodeType<T> = {
  value: T;
  next: NodeType<T> | null;
};

function Node<T>(value: T): NodeType<T> {
  return {
    value,
    next: null,
  };
}

type QueueType<T> = {
  enqueue: (value: T) => number;
  dequeue: () => T | undefined;
  front: () => T | undefined;
  rear: () => T | undefined;
  isEmpty: () => boolean;
  isFull: () => boolean;
  size: () => number;
};

function Queue<T>(maxSize: number): QueueType<T> {
  let length = 0;
  const maxLength = maxSize;
  let head: NodeType<T> | null = null;
  let tail: NodeType<T> | null = null;

  const enqueue = (value: T): number => {
    if (length === maxLength)
      throw new Error(
        `queue is full, max size(${maxLength}), current size(${length})`
      );

    const newNode = Node(value);
    if (head === null && length === 0) {
      head = newNode;
      tail = newNode;
    } else {
      tail!.next = newNode;
      tail = newNode;
    }
    length += 1;
    return length;
  };

  const dequeue = (): T | undefined => {
    if (head === null && length === 0) return undefined;
    const { value } = head as NodeType<T>;
    if (length === 1) {
      head = null;
      tail = null;
    } else {
      head = head!.next;
    }
    length -= 1;
    return value;
  };

  const front = (): T | undefined => {
    return head === null ? undefined : head.value;
  };

  const rear = (): T | undefined => {
    return tail === null ? undefined : tail.value;
  };

  const isEmpty = (): boolean => {
    return head === null && length === 0;
  };

  const isFull = (): boolean => {
    return length === maxLength;
  };

  const size = () => {
    return length;
  };

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

export default Queue;
