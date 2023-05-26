export type NodeType<T> = {
  id: number;
  value: T;
};

// export type HeapType = 'min' | 'max';

export type HeapType<T> = {
  stringify: () => string;
  buildMaxHeap: (arr: number[]) => void;
  heapSort: (arr: number[]) => void;
  insert: (priority: number, value: T) => void;
  extract: () => undefined | T;
};
