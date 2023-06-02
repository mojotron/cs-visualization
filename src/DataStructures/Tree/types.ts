export type NodeType<T> = {
  id: string;
  value: T;
  height: number;
  left: NodeType<T> | null;
  right: NodeType<T> | null;
};

export type AVLTreeType<T> = {
  insert: (id: string, value: T) => void;
  // delete: () => void;
  // TEMP
  height: number;
};
