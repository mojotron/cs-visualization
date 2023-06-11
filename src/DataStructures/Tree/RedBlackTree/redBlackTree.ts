/* eslint-disable no-param-reassign, no-lonely-if */

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

  const switchColor = (node: NodeRedBlack<T>) => {
    node.color = node.color === 'black' ? 'red' : 'black';
  };

  const rotateLeft = (x: NodeRedBlack<T>) => {
    //        |          |
    //        x   <<<<   y  O(1)
    //       / \  >>>>  / \
    //      A   y      x   C
    //         / \    / \
    //        B   C  A   B
    // https://www.jot.fm/issues/issue_2005_03/column6/
    const y = x.right as NodeRedBlack<T>;
    x.right = y.left;
    if (y.left !== null) y.left.parent = x;
    y.parent = x.parent;
    if (x.parent === null) {
      root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.left = x;
    x.parent = y;
    console.log(y);
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
  const fixInsertion = (node: NodeRedBlack<T>) => {
    let pointer = node;
    // pointer is red and while parent is red and there is grandparent loop and fix
    while (isRed(pointer.parent) && pointer.parent?.parent) {
      const { parent } = pointer;
      const grandparent = parent.parent as NodeRedBlack<T>;
      // // determine on which size parent is heavy
      if (parent === grandparent?.left) {
        // parent is left child of grandparent
        // check for uncle color
        if (isRed(grandparent.right)) {
          // uncle is red => case 2 => recolor parent, grand parent and uncle
        } else {
          // uncle is black or null
          if (pointer === parent.right) {
            // nodes are forming triangle => case 3 => rotate parent opposite of
            //     G                        new node, child takes place of parent
            //    / \
            //   P   U
            //    \
            //     X
          }
          // nodes are forming line => case 4 => rotate grandparent opposite of
          //     G                  new node and recolor parent and grandparent
          //    / \
          //   P   U
          //  /
          // X
        }
      } else {
        // parent is right child of grandparent
        // check for uncle color
        if (isRed(grandparent.left)) {
          // uncle is red => recolor parent, grand parent and uncle
        } else {
          if (pointer === parent.left) {
            // nodes are forming triangle => case 3 => rotate parent opposite of
            //     G                        new node, child takes place of parent
            //    / \
            //   U   P
            //      /
            //     X
          }
          // nodes are forming line => case 4 => rotate grandparent opposite of
          //     G                  new node and recolor parent and grandparent
          //    / \
          //   U   P
          //        \
          //         X
        }
      }
      pointer = grandparent;
    }
  };
  // insert node with parent property
  const insertNode = (rootNode: NodeRedBlack<T>, id: number, value: T) => {
    if (rootNode === null) {
      rootNode = Node(id, value);
      fixInsertion(rootNode);
      return rootNode;
    }
    if (id < rootNode.id) {
      const left = insertNode(rootNode.left as NodeRedBlack<T>, id, value);
      rootNode.left = left;
      left.parent = rootNode;
      // fixInsertion(rootNode.left);
    }
    if (id > rootNode.id) {
      const right = insertNode(rootNode.right as NodeRedBlack<T>, id, value);
      rootNode.right = right;
      right.parent = rootNode;

      // fixInsertion(rootNode.right);
    }
    return rootNode;
  };

  const insert = (id: number, value: T) => {
    const newTree = insertNode(root as NodeRedBlack<T>, id, value);
    newTree.color = 'black';
    root = newTree;
  };

  const remove = () => {};
  const search = () => {};

  // TEMP
  const inOrder = (rootNode: NodeRedBlack<T>) => {
    if (rootNode !== null) {
      inOrder(rootNode.left as NodeRedBlack<T>);
      console.log(`node:${rootNode.id}, parent: ${rootNode?.parent?.id}`);
      inOrder(rootNode.right as NodeRedBlack<T>);
    }
  };

  const print = () => {
    return;
    inOrder(root as NodeRedBlack<T>);
  };

  return {
    insert,
    remove,
    search,
    print,
    rotateRight,
    rotateLeft,
  };
};

export default RedBlackTree;
