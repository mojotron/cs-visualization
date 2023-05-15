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
  // temp
  breathFirstTraversal: () => T[];
  breathFirstRecursive: () => T[];
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
    // DFS
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

  const breathFirstTraversal = () => {
    let pointer = root;
    const visited = [];
    const queue = [];
    queue.push(pointer);
    while (queue.length > 0) {
      pointer = queue.shift() as NodeType<T>;
      visited.push(pointer.value);
      if (pointer.left) queue.push(pointer.left);
      if (pointer.right) queue.push(pointer.right);
    }
    return visited;
  };

  const breathFirstTraversalRecursive = (
    queue: NodeType<T>[] = [],
    visited: T[] = []
  ): T[] => {
    if (queue.length === 0) return visited;
    const pointer = queue.shift() as NodeType<T>;
    visited.push(pointer.value);
    if (pointer.left) queue.push(pointer.left);
    if (pointer.right) queue.push(pointer.right);
    return breathFirstTraversalRecursive(queue, visited);
  };

  const breathFirstRecursive = () => {
    return breathFirstTraversalRecursive([root as NodeType<T>]);
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

  const removeNodeLoop = (value: T): NodeType<T> | undefined => {
    let pointer: NodeType<T> | null = root;
    let parent: NodeType<T> | null = null;
    // search for value down the tree
    while (pointer !== null && pointer.value !== value) {
      parent = pointer;
      pointer = value < pointer.value ? pointer.left : pointer.right;
    }
    // value not found
    if (pointer === null) return undefined;
    // value found
    // case 1 => node doesn't have child elements
    if (pointer.left === null && pointer.right === null) {
      // Spacial case value is root node and only node in BST
      if (root === pointer) {
        root = null;
        return;
      }

      if (parent?.left === pointer) parent.left = pointer.left;
      else parent!.right = pointer.right;
      pointer = null;
    }
    // case 2 => node have 1 child element (left or right)
    if (pointer?.left !== null && pointer?.right === null) {
      if (parent?.left === pointer) parent.left = pointer.left;
      else parent!.right = pointer.left;
      pointer = null;
    }
    if (pointer?.left === null && pointer?.right !== null) {
      if (parent?.right === pointer) parent.right = pointer.right;
      else parent!.left = pointer.right;
      pointer = null;
    }
    // case 3 => node have 2 child elements (left and right)
    if (pointer?.left !== null && pointer?.right !== null) {
      let successor = pointer?.right;
      let successorParent = null;
      // find minimum value in right subtree (successor)
      while (successor?.left !== null) {
        successorParent = successor;
        successor = successor?.left;
      }
      // check if successorParent === pointer
      if (successorParent !== null) {
        // successor !== pointer => make left parent child = successor right child
        successorParent!.left = successor?.right;
      } else {
        // successor === pointer => make pointer right child = successor right child
        pointer!.right = successor?.right;
      }
      pointer!.value = successor?.value;
      successor = null!;
    }
    return root ?? undefined;
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
    // temp
    breathFirstTraversal,
    breathFirstRecursive,
  };
}

export default BinarySearchTree;
