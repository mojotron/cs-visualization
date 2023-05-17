export type SingleNode<T> = {
  value: T;
  next: null | SingleNode<T>;
};

export type DoubleNode<T> = {
  value: T;
  prev: null | DoubleNode<T>;
  next: null | DoubleNode<T>;
};

export type LinkedList<T> = {
  length: number;
  head: T | null;
  tail: T | null;
  append: (value: T) => number;
  prepend: (value: T) => number;
  insert: (index: number, value: T) => number | undefined;
  pop: () => T | undefined;
  shift: () => T | undefined;
  deleteAt: (index: number) => T | undefined;
  forEach: (callback: (value: T, index: number) => void) => void;
  print: () => void;
  search: (callback: (ele: T, index: number) => boolean) => T | undefined;
  reverse: () => LinkedList<T> | null;
  reverseInPlace: () => void;
  sort: () => LinkedList<T> | null;
};
