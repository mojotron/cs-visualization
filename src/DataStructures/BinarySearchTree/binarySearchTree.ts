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
  remove: (value: T) => void;
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

  const depthFirstSearch = (
    value: T,
    rootNode = root as NodeType<T>
  ): T | undefined => {
    if (rootNode === null) return undefined;
    if (value === rootNode.value) return rootNode.value;
    if (value < rootNode.value)
      return depthFirstSearch(value, rootNode.left as NodeType<T>);
    if (value > rootNode.value)
      return depthFirstSearch(value, rootNode.right as NodeType<T>);
  };

  const breathFirstSearch = (value: T): T | undefined => {
    return undefined;
  };

  const search = (
    value: T,
    direction: 'depth' | 'breath' = 'depth'
  ): T | undefined => {
    if (root === null) return undefined;
    if (direction === 'depth') return depthFirstSearch(value);
    return breathFirstSearch(value);
  };

  const nextMinValue = (rootNode: NodeType<T>): T | undefined => {
    if (rootNode === null) return undefined;
    if (rootNode.left === null) return rootNode.value;
    return nextMinValue(rootNode.left);
  };

  const removeNodeLoop = (value: T): T | null => {
    if (root === null) return null;

    let pointer: NodeType<T> | null = root;
    let prev: NodeType<T> | null = null;

    while (pointer) {
      if (value < pointer.value) {
        prev = pointer;
        pointer = pointer.left as NodeType<T>;
      }
      if (value > pointer.value) {
        prev = pointer;
        pointer = pointer.right as NodeType<T>;
      }
      if (value === pointer.value) {
        // case => leaf
        if (pointer.left === null && pointer.right === null) {
          prev!.left = null;
          prev!.right = null;
        }
        // case 1 child left
        if (pointer.right === null && pointer.left !== null) {
          prev!.left = pointer.left;
        }
        // case 1 child right
        if (pointer.left === null && pointer.right !== null) {
          prev!.right = pointer.right;
        }
        // case left and right child
        if (pointer.left !== null && pointer.right !== null) {
          let successorPrev = pointer;
          let successor = pointer.right;
          while (successor.left !== null) {
            successorPrev = successor;
            successor = successor.left;
          }
          pointer.value = successor.value;
          console.log(successorPrev);

          if (successorPrev.left === successor) {
            console.log('1');

            successorPrev.left = null;
          } else {
            console.log('2');

            successorPrev.right = null;
          }
        }
        return pointer.value;
      }
    }
  };

  const removeNode = (
    value: T,
    rootNode: NodeType<T> | null
  ): NodeType<T> | null => {
    if (rootNode === null) return null;
    if (value < rootNode.value) {
      rootNode.left = removeNode(value, rootNode.left as NodeType<T>);
    }
    if (value > rootNode.value)
      rootNode.right = removeNode(value, rootNode.right as NodeType<T>);
    if (value === rootNode.value) {
      if (rootNode.left === null && rootNode.right === null) {
        rootNode = null;
        return rootNode;
      }
      if (rootNode.left === null) {
        rootNode = rootNode.right;
        return rootNode;
      }
      if (rootNode.right === null) {
        rootNode = rootNode.left;
        return rootNode;
      }
      if (rootNode.left !== null && rootNode.right !== null) {
        const nextMin = nextMinValue(rootNode.right);
        rootNode.value = nextMin as T;
        rootNode.right = removeNode(nextMin as T, rootNode.right);
      }
    }
    return rootNode;
  };

  const remove = (value: T): void => {
    removeNodeLoop(value);
    // removeNode(value, root);
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
