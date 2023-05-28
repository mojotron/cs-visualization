export type NodeArrayType<T> = {
  priority: number;
  value: T;
};

export type NodeLinkedListType<T> = {
  priority: number;
  value: T;
  next: null | NodeLinkedListType<T>;
};

export type PriorityQueueType<T> = {
  size: number;
  isEmpty: () => boolean;
  insert: (priority: number, value: T) => void;
  pull: () => undefined | T;
  peek: () => undefined | T;
};
