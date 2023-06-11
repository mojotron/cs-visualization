export type NodeType<T> = {
  id: string;
  value: T;
  left: NodeType<T> | null;
  right: NodeType<T> | null;
};

export type AVLTreeType<T> = {
  insert: (id: string, value: T) => void;
  remove: (id: string) => undefined | T;
  forEach: (
    traversal: 'preOrder' | 'inOrder' | 'postOrder',
    callback: (id: string, value: T) => void
  ) => void;
  getValue: (id: string) => undefined | T;
  height: number;
};

export type NodeRedBlack<T> = {
  id: number;
  value: T;
  color: 'red' | 'black';
  left: NodeRedBlack<T> | null;
  right: NodeRedBlack<T> | null;
  parent: NodeRedBlack<T> | null;
};

export type RedBlackTreeType<T> = {
  insert: (id: number, value: T) => void;
  remove: () => void;
  search: () => void;
  // TEMP
  print: () => void;
  rotateLeft: (node: NodeRedBlack<T>) => void;
  rotateRight: (node: NodeRedBlack<T>) => void;
};
