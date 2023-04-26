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
  search: (value: T, direction: 'depth' | 'breath') => T | undefined;
  remove: (value: T) => T | undefined;
  forEach: (
    traversal: 'inOrder' | 'preOrder' | 'postOrder',
    callback: (value: T) => void
  ) => void;
  balance: () => void;
};

function BinarySearchTree<T>(): BinarySearchTreeType<T> {
  let root: NodeType<T> | null = null;

  const insertNewNodeLoop = (value: T): void => {
    const newNode = Node(value);
    if (root === null) {
      root = newNode;
    } else {
      let pointer = root as NodeType<T>;
      while (true) {
        if (value < pointer.value) {
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

  const insertNewNode = (value: T, rootNode: NodeType<T>): NodeType<T> => {
    if (rootNode === null) {
      rootNode = Node(value);
      return rootNode;
    }
    if (value < rootNode.value) {
      rootNode.left = insertNewNode(value, rootNode.left as NodeType<T>);
    }
    if (value >= rootNode.value) {
      rootNode.right = insertNewNode(value, rootNode.right as NodeType<T>);
    }

    return rootNode;
  };

  const insert = (value: T): void => {
    // insertNewNodeLoop(value);
    root = insertNewNode(value, root as NodeType<T>);
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

  // search TODO BRAIN NOT FOUND
  const depthFirstSearch = (
    value: T,
    rootNode = root as NodeType<T>
  ): T | undefined => {
    if (rootNode === null) return undefined;
    if (value < (rootNode.value as NodeType<T>))
      depthFirstSearch(value, rootNode.left as NodeType<T>);
    if (value > (rootNode.value as NodeType<T>))
      depthFirstSearch(value, rootNode.right as NodeType<T>);
    if (rootNode.value === value) {
      console.log(rootNode.value);
      return rootNode.value;
    }
  };

  const breathFirstSearch = (value: T): T | undefined => {
    return undefined;
  };

  const search = (
    value: T,
    direction: 'depth' | 'breath' = 'depth'
  ): T | undefined => {
    if (root === null) return undefined;
    const x = depthFirstSearch(value);
    // if (direction) return depthFirstSearch(value);
    console.log('x', x);
    // return breathFirstSearch(value);
  };

  const remove = (value: T): T | undefined => {
    return undefined;
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
