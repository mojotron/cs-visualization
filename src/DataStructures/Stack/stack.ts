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

type StackType<T> = {
  push: (value: T) => void;
  pop: () => T | undefined;
  top: () => T | undefined;
  bottom: () => T | undefined;
  isEmpty: () => boolean;
  size: () => number;
};

function Stack<T>(): StackType<T> {
  let length = 0;
  let head: NodeType<T> | null = null;
  let tail: NodeType<T> | null = null;
  // const arr: T[] = []; // arr implementation

  const push = (value: T): number => {
    const newNode = Node(value);
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      newNode.next = head;
      head = newNode;
    }
    length += 1;
    return length;
    // arr.push(value); // arr implementation
  };

  const pop = (): T | undefined => {
    if (head === null && length === 0) return undefined;

    const { value } = head as NodeType<T>;

    if (length === 1) {
      head = null;
      tail = null;
      length = 0;
    } else {
      head = head!.next;
      length -= 1;
    }

    return value;
    // return arr.pop();  // arr implementation
  };

  const top = (): T | undefined => {
    return head === null ? undefined : head.value;
    // return arr[arr.length - 1];  // arr implementation
  };

  const bottom = (): T | undefined => {
    return tail === null ? undefined : tail.value;
  };

  const isEmpty = (): boolean => {
    return head === null && length === 0;
    // return arr.length === 0; // arr implementation
  };

  const size = (): number => {
    return length;
    // return arr.length // arr implementation
  };

  return {
    push,
    pop,
    top,
    bottom,
    isEmpty,
    size,
  };
}

export default Stack;
