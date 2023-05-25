export type NodeType<T> = {
  id: number;
  value: T;
};

// export type HeapType = 'min' | 'max';

export type HeapType<T> = {
  // heapify: () => void;
  stringify: () => string;
  insert: (priority: number, value: T) => void;
  extract: () => undefined | T;
  // peek: () => void;
};
