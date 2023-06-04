/* eslint-disable no-param-reassign */
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

  const calcBalanceFactor = (rootNode: NodeType<T>): number => {
    if (rootNode === null) return 0;
    const left = calcHeight(rootNode.left as NodeType<T>);
    const right = calcHeight(rootNode.right as NodeType<T>);
    return left - right;
  };
  // left left imbalance -> rotate right
  const rightRotation = (rootNode: NodeType<T>) => {
    //  root  A   =>      B       temp = root.left => B
    //       / \        /   \     tempRight = temp.right => Br
    //      B   Ar     C     A    temp.right = root
    //     / \        / \   / \   root.left = tempRight;
    //    C   Br     Cl Cr Br  Ar
    //   / \
    //  Cl  Cr
    const temp = rootNode.left as NodeType<T>;
    const tempRight = temp?.right;
    temp.right = rootNode;
    rootNode.left = tempRight;

    return temp;
  };
  // right right imbalance -> rotate left
  const leftRotation = (rootNode: NodeType<T>) => {
    //  root  A   =>       B        temp = root.right => B
    //       / \         /   \      tempLeft = temp.left => Bl
    //      Al  B       A     C     temp.left = root
    //         / \     / \   / \    root.right = tempLeft;
    //        Bl  C   Al Bl Cl  Cr
    //           / \
    //          Cl  Cr
    const temp = rootNode.right as NodeType<T>;
    const tempLeft = temp?.left;
    temp.left = rootNode;
    rootNode.right = tempLeft;

    return temp;
  };
  //
  const searchId = (rootNode: NodeType<T>, id: string): undefined | T => {
    if (rootNode === null) return undefined;
    if (id < rootNode.id) return searchId(rootNode.left as NodeType<T>, id);
    if (id > rootNode.id) return searchId(rootNode.right as NodeType<T>, id);
    if (rootNode.id === id) return rootNode.value;
  };

  const getValue = (id: string): undefined | T => {
    const value = searchId(root as NodeType<T>, id);
    return value;
  };

  const balance = (rootNode: NodeType<T>, id: string) => {
    const balanceFactor = calcBalanceFactor(rootNode);
    // rotations
    // left imbalance
    if (balanceFactor > 1 && rootNode.left) {
      // left left imbalance
      if (id < rootNode.left.id) {
        //     C <- rootNode.id
        //    /
        //   B <- rootNode.left
        //  /
        // A <- id => id < rootNode.left.id => B < A
        return rightRotation(rootNode);
      }
      // left right imbalance
      if (id > rootNode.left.id) {
        //     C <- rootNode.id
        //    /
        //   A <- rootNode.left
        //    \
        //     B <- id => id > rootNode.left.id => B > A
        rootNode.left = leftRotation(rootNode.left);
        return rightRotation(rootNode);
      }
    }
    // right imbalance
    if (balanceFactor < -1 && rootNode.right) {
      // right left imbalance
      if (id > rootNode.right.id) {
        // A <- rootNode.id
        //  \
        //   B <- rootNode.right
        //    \
        //     C <- id => id > rootNode.right.id => C > B
        return leftRotation(rootNode);
      }
      // right right imbalance
      if (id < rootNode.right.id) {
        //  C <- rootNode.id
        //   \
        //    B <- rootNode.right
        //   /
        //  A <- id => id < rootNode.right.id => A < B
        rootNode.right = rightRotation(rootNode.right);
        return leftRotation(rootNode);
      }
    }
    return rootNode;
  };
  //
  const insertNode = (id: string, value: T, rootNode: NodeType<T>) => {
    // 1. simple bst insertion
    if (rootNode === null) {
      rootNode = Node(id, value);
      // no need to balance leaf ???
      return rootNode;
    }
    if (id < rootNode.id) {
      rootNode.left = insertNode(id, value, rootNode.left as NodeType<T>);
    }
    if (id >= rootNode.id) {
      rootNode.right = insertNode(id, value, rootNode.right as NodeType<T>);
    }
    // 2. fix avl property balance tree bottom -> top (go back)
    return balance(rootNode, id);
  };

  const insert = (id: string, value: T) => {
    root = insertNode(id, value, root as NodeType<T>);
  };

  const nextMinValue = (
    rootNode: NodeType<T>
  ): undefined | { id: string; value: T } => {
    if (rootNode === null) return undefined;
    if (rootNode.left === null)
      return { id: rootNode.id, value: rootNode.value };
    return nextMinValue(rootNode.left);
  };

  const removeNode = (
    rootNode: NodeType<T> | null,
    id: string
  ): NodeType<T> | null => {
    if (rootNode === null) return rootNode;
    if (id < rootNode.id)
      rootNode.left = removeNode(rootNode.left as NodeType<T>, id);
    if (id > rootNode.id)
      rootNode.right = removeNode(rootNode.right as NodeType<T>, id);
    if (id === rootNode.id) {
      // deletion of leaf node
      if (rootNode.left === null && rootNode.right === null) {
        rootNode = null;
        return rootNode;
      }
      // deletion of a node with 1 child node
      if (rootNode.left === null) {
        rootNode = rootNode.right;
        return rootNode;
      }
      if (rootNode.right === null) {
        rootNode = rootNode.left;
        return rootNode;
      }
      // deletion of a node with 2 child nodes
      if (rootNode.left !== null && rootNode.right !== null) {
        const nextMin = nextMinValue(rootNode.right) as {
          id: string;
          value: T;
        };
        rootNode.id = nextMin.id;
        rootNode.value = nextMin.value;
        rootNode.right = removeNode(rootNode.right, nextMin.id);
      }
      // balance tree bottom -> top
    }
    const balanceFactor = calcBalanceFactor(rootNode);
    // left imbalance
    if (balanceFactor > 1 && rootNode.left) {
      const leftSubtreeBalanceFactor = calcBalanceFactor(rootNode.left);
      // left left imbalance
      if (leftSubtreeBalanceFactor >= 0) {
        return rightRotation(rootNode);
      }
      // left right imbalance
      if (leftSubtreeBalanceFactor < 0) {
        rootNode.left = leftRotation(rootNode.left);
        return rightRotation(rootNode);
      }
    }
    // right imbalance
    if (balanceFactor < -1 && rootNode.right) {
      const rightSubtreeBalanceFactor = calcBalanceFactor(rootNode.right);
      // right right imbalance
      if (rightSubtreeBalanceFactor <= 0) {
        return leftRotation(rootNode);
      }
      // right left imbalance
      if (rightSubtreeBalanceFactor > 0) {
        rootNode.right = rightRotation(rootNode.right);
        return leftRotation(rootNode);
      }
    }
    return rootNode;
  };

  const remove = (id: string): undefined | T => {
    const value = getValue(id);
    if (value) {
      root = removeNode(root, id);
    }
    return value;
  };

  const traverse = (
    rootNode: NodeType<T>,
    traversal: 'preOrder' | 'inOrder' | 'postOrder',
    callback: (id: string, value: T) => void
  ): void => {
    if (rootNode === null) return;
    if (traversal === 'preOrder') callback(rootNode.id, rootNode.value);
    traverse(rootNode.left as NodeType<T>, traversal, callback);
    if (traversal === 'inOrder') callback(rootNode.id, rootNode.value);
    traverse(rootNode.right as NodeType<T>, traversal, callback);
    if (traversal === 'postOrder') callback(rootNode.id, rootNode.value);
  };

  const forEach = (
    traversal: 'preOrder' | 'inOrder' | 'postOrder',
    callback: (id: string, value: T) => void
  ): void => {
    traverse(root as NodeType<T>, traversal, callback);
  };

  return {
    get height(): number {
      return calcHeight(root);
    },
    getValue,
    insert,
    forEach,
    remove,
  };
};

export default AVLTree;
