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
