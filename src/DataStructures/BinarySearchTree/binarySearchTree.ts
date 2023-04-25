/* eslint-disable no-param-reassign */

type NodeType<T> = {
  value: T;
  left: NodeType<T> | null;
  right: NodeType<T> | null;
};

function Node<T>(value: T): NodeType<T> {
  return {
    value,
    left: null,
    right: null,
  };
}

type BinarySearchTreeType<T> = {
  insert: (value: T) => void;
  search: (value: T) => T | undefined;
  remove: (value: T) => T | undefined;
  forEach: (
    traversal: 'inOrder' | 'preOrder' | 'postOrder',
    callback: (value: T) => void
  ) => void;
  balance: () => void;
};

function BinarySearchTree<T>(): BinarySearchTreeType<T> {
  let root: NodeType<T> | null = null;

  const insertNewNode = (value: T, rootNode: NodeType<T>): NodeType<T> => {
    if (rootNode === null) {
      rootNode = Node(value);
      return rootNode;
    }
    if (value < rootNode.value) {
      rootNode.left = insertNewNode(value, rootNode.left as NodeType<T>);
    }
    if (value > rootNode.value) {
      rootNode.right = insertNewNode(value, rootNode.right as NodeType<T>);
    }

    return rootNode;
  };

  const insert = (value: T): void => {
    root = insertNewNode(value, root as NodeType<T>);
  };

  const search = (value: T): T | undefined => {
    return undefined;
  };

  const remove = (value: T): T | undefined => {
    return undefined;
  };

  // traversal
  const traverse = (
    rootNode: NodeType<T>,
    traversal: 'inOrder' | 'preOrder' | 'postOrder',
    callback: (value: T) => void
  ) => {
    if (rootNode === null) return;
    if (traversal === 'preOrder') callback(rootNode.value);
    traverse(rootNode.left as NodeType<T>, traversal, callback);
    if (traversal === 'inOrder') callback(rootNode.value);
    traverse(rootNode.right as NodeType<T>, traversal, callback);
    if (traversal === 'postOrder') callback(rootNode.value);
  };

  const forEach = (
    traversal: 'inOrder' | 'preOrder' | 'postOrder',
    callback: (value: T) => void
  ) => {
    traverse(root as NodeType<T>, traversal, callback);
  };

  const balance = () => {};

  return {
    insert,
    search,
    remove,
    forEach,
    balance,
  };
}

export default BinarySearchTree;
