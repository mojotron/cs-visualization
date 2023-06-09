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
  const fixInsertion = (node: NodeRedBlack<T>) => {
    let pointer = node;
    // pointer is red and while parent is red and there is grandparent loop and fix
    while (isRed(pointer.parent) && pointer.parent?.parent) {
      console.log(node.id, '*');
      const { parent } = pointer;
      const grandparent = parent.parent as NodeRedBlack<T>;
      // // determine on which size parent is heavy
      if (parent === grandparent?.left) {
        console.log('left');
        // parent is left child of grandparent
        // check for uncle color
        if (isRed(grandparent.right)) {
          // uncle is red => case 2 => recolor parent, grand parent and uncle
          switchColor(grandparent);
        } else {
          // uncle is black or null
          if (pointer === parent.right) {
            // nodes are forming triangle => case 3 => rotate parent opposite of
            //     G                        new node, child takes place of parent
            //    / \
            //   P   U
            //    \
            //     X
            rotateLeft(parent);
            pointer = parent;
          }
          // nodes are forming line => case 4 => rotate grandparent opposite of
          //     G                  new node and recolor parent and grandparent
          //    / \
          //   P   U
          //  /
          // X
          rotateRight(grandparent);
        }
      } else {
        console.log('right');
        // parent is right child of grandparent
        // check for uncle color
        if (isRed(grandparent.left)) {
          console.log('uncle red');
          // uncle is red => recolor parent, grand parent and uncle
          switchColor(grandparent);
          pointer = grandparent;
        } else {
          console.log('uncle black');
          if (pointer === parent.left) {
            // nodes are forming triangle => case 3 => rotate parent opposite of
            //     G                        new node, child takes place of parent
            //    / \
            //   U   P
            //      /
            //     X
            rotateRight(parent);
            pointer = parent;
          }
          // nodes are forming line => case 4 => rotate grandparent opposite of
          //     G                  new node and recolor parent and grandparent
          //    / \
          //   U   P
          //        \
          //         X
          rotateLeft(grandparent);
        }
      }
      pointer = grandparent;
    }
    if (root) {
      root.color = 'black';
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
      fixInsertion(rootNode.left);
    }
    if (id > rootNode.id) {
      const right = insertNode(rootNode.right as NodeRedBlack<T>, id, value);
      rootNode.right = right;
      right.parent = rootNode;
      fixInsertion(rootNode.right);
    }
    return rootNode;
  };

  const insert = (id: number, value: T) => {
    // special case tree is empty => first node is black

    root = insertNode(root as NodeRedBlack<T>, id, value);
    if (id === 4) console.log(root);
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
    inOrder(root as NodeRedBlack<T>);
  };

  return {
    insert,
    remove,
    search,
    print,
  };
};

export default RedBlackTree;
