/* eslint-disable no-param-reassign */

import { RedBlackTreeType, NodeRedBlack } from '../types';

const Node = <T>(id: number, value: T): NodeRedBlack<T> => {
  return {
    id,
    value,
    color: 'red',
    left: null,
    right: null,
    parent: null,
  };
};

const RedBlackTree = <T>(): RedBlackTreeType<T> => {
  let root: null | NodeRedBlack<T> = null;
  // helpers
  const isRed = (rootNode: NodeRedBlack<T> | null) => {
    if (rootNode === null) return false; // null links are black
    return rootNode.color === 'red';
  };
  const rotateLeft = (node: NodeRedBlack<T>) => {
    //        |          |
    //        x   <<<<   y  O(1)
    //       / \  >>>>  / \
    //      A   y      x   C
    //         / \    / \
    //        B   C  A   B
    // https://www.jot.fm/issues/issue_2005_03/column6/
    const parent = node.parent as NodeRedBlack<T>;
    const right = node.right as NodeRedBlack<T>;
    const temp = right.left;
    right.left = node;
    node.parent = right;
    node.right = temp;
    if (temp !== null) temp.parent = node;
    if (right !== null) right.parent = parent;
    node = right;
  };

  const rotateRight = (node: NodeRedBlack<T>) => {
    const parent = node.parent as NodeRedBlack<T>;
    const left = node.left as NodeRedBlack<T>;
    const temp = left.right;
    left.right = node;
    node.parent = left;
    node.left = temp;
    if (temp !== null) temp.parent = node;
    if (left !== null) left.parent = parent;
    node = left;
  };
  //
  const fixInsertion = () => {};

  const insertNode = (rootNode: NodeRedBlack<T>, id: number, value: T) => {
    if (rootNode === null) {
      rootNode = Node(id, value);
      return rootNode;
    }
    if (id < rootNode.id) {
      rootNode.left = insertNode(rootNode.left as NodeRedBlack<T>, id, value);
    }
    if (id > rootNode.id) {
      rootNode.right = insertNode(rootNode.right as NodeRedBlack<T>, id, value);
    }
    return rootNode;
  };

  const insert = (id: number, value: T) => {
    // special case tree is empty => first node is black
    if (root === null) {
      const newNode = Node(id, value);
      newNode.color = 'black';
      root = newNode;
    } else {
      root = insertNode(root, id, value);
    }
    if (id === 5) {
      console.log(root);
    }
  };

  const remove = () => {};
  const search = () => {};

  return {
    insert,
    remove,
    search,
  };
};

export default RedBlackTree;
