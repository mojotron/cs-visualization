export type NodeType<T> = {
  priority: number;
  value: T;
};

export type PriorityQueueType<T> = {
  size: number;
  isEmpty: () => boolean;
  insert: (priority: number, value: T) => void;
  pull: () => undefined | T;
  peek: () => undefined | T;
};
