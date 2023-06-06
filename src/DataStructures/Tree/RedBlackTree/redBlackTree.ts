import { RedBlackTreeType, NodeRedBlack } from '../types';

const Node = <T>(id: number, value: T): NodeRedBlack<T> => {
  return {
    id,
    value,
    left: null,
    right: null,
    color: 'red',
  };
};

const RedBlackTree = <T>(): RedBlackTreeType<T> => {
  const root: null | NodeRedBlack<T> = null;
  // helpers
  const isRed = (rootNode: NodeRedBlack<T> | null) => {
    if (rootNode === null) return false; // null links are black
    return rootNode.color === 'red';
  };
  const rotateLeft = (rootNode: NodeRedBlack<T>) => {
    //        y
    //       / \
    //      A   x
    //         / \
    //        B   C
  };

  const rotateRight = (rootNode: NodeRedBlack<T>) => {};

  //
  const insert = (id: number, value: T) => {};
  const remove = () => {};
  const search = () => {};

  return {
    insert,
    remove,
    search,
  };
};

export default RedBlackTree;
