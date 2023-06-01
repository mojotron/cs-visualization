import { NodeType, AVLTreeType } from '../types';

const Node = <T>(id: string, value: T): NodeType<T> => {
  return {
    id,
    value,
    left: null,
    right: null,
  };
};

const AVLTree = <T>(): AVLTreeType<T> => {
  let root: NodeType<T> | null = null;
  // helpers
  const calcHeight = (rootNode: NodeType<T> | null): number => {
    if (rootNode === null) return 0;
    const left = 1 + calcHeight(rootNode.left as NodeType<T>);
    const right = 1 + calcHeight(rootNode.right as NodeType<T>);
    return left > right ? left : right;
  };

  const calcBalanceFactor = (rootNode: NodeType<T> | null) => {
    if (rootNode === null) return null;
    const left = calcHeight(rootNode.left as NodeType<T>);
    const right = calcHeight(rootNode.right as NodeType<T>);
    return left - right;
  };
  //
  const insert = (id: string, value: T) => {
    const newNode = Node(id, value);
    if (root === null) {
      root = newNode;
    } else {
      let pointer = root as NodeType<T>;
      while (true) {
        if (id < pointer.id) {
          if (pointer.left === null) {
            pointer.left = newNode;

            return;
          }
          pointer = pointer.left;
        } else {
          if (pointer.right === null) {
            pointer.right = newNode;

            return;
          }
          pointer = pointer.right;
        }
      }
    }
  };

  return {
    get height(): number {
      return calcHeight(root);
    },
    insert,
  };
};

export default AVLTree;
