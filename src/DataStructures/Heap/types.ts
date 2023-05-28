export type NodeType<T> = {
  id: number;
  value: T;
};

export type HeapType<T> = {
  stringify: () => string;
  insert: (priority: number, value: T) => void;
  extract: () => undefined | T;
  peek: () => undefined | T;
};
