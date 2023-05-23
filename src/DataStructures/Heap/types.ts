export type HeapType = 'min' | 'max';

export type Heap = {
  heapify: () => void;
  insert: () => void;
  delete: () => void;
  peek: () => void;
};
