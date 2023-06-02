/* eslint-disable no-param-reassign */
import { NodeType, AVLTreeType } from '../types';

const Node = <T>(id: string, value: T): NodeType<T> => {
  return {
    id,
    value,
    height: 0, // TODO
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
    //  root  A   =>      B       b = root.left
    //       / \        /   \     bRight = b.right
    //      B   Ar     C     A    b.right = root
    //     / \        / \   / \   root.left = bRight;
    //    C   Br     Cl Cr Br  Ar
    //   / \
    //  Cl  Cr
    const leftChild = rootNode.left as NodeType<T>;
    const leftChildRight = leftChild?.right;
    rootNode.left = leftChildRight;
    leftChild.right = rootNode;

    return leftChild;
  };
  // right right imbalance -> rotate left
  const leftRotation = (rootNode: NodeType<T>) => {
    //  root  A   =>       B        b = root.right
    //       / \         /   \      bLeft = b.left
    //      Al  B       A     C     b.left = root
    //         / \     / \   / \   root.right = bLeft;
    //        Bl  C   Al Bl Cl  Cr
    //           / \
    //          Cl  Cr
    const rightChild = rootNode.right as NodeType<T>;
    const rightChildLeft = rightChild?.left;
    rootNode.right = rightChildLeft;
    rightChild.right = rootNode;

    return rightChild;
  };
  //
  const balance = (rootNode: NodeType<T>, id: string) => {
    const balanceFactor = calcBalanceFactor(rootNode);
    // rotations
    // left imbalance
    if (balanceFactor > 1) {
      // left right imbalance
      // left left imbalance
    }
    // right imbalance
    if (balanceFactor < -1) {
      // right left imbalance
      // right right imbalance
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
    // 2. fix avl property
    // balance tree bottom -> top (go back)
    return balance(rootNode, id);
  };

  const insert = (id: string, value: T) => {
    root = insertNode(id, value, root as NodeType<T>);
    console.log(root);
  };

  return {
    get height(): number {
      return calcHeight(root);
    },
    insert,
  };
};

export default AVLTree;
