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

  const searchById = (
    id: number,
    rootNode = root
  ): NodeRedBlack<T> | undefined => {
    if (rootNode === null) return undefined;
    if (rootNode.id === id) return rootNode;
    if (id < rootNode.id) return searchById(id, rootNode.left);
    if (id > rootNode.id) return searchById(id, rootNode.right);
  };

  const search = (id: number): undefined | T => {
    const element = searchById(id, root);
    if (!element) return undefined;
    return element.value;
  };

  const transplant = (u: NodeRedBlack<T>, v: NodeRedBlack<T>) => {
    if (u.parent === null) root = v;
    else if (u === u.parent.left) u.parent.left = v;
    else u.parent.right = v;
    if (v) v.parent = u.parent;
  };

  const findMin = (node: NodeRedBlack<T>) => {
    let pointer = node;
    while (pointer && pointer.left !== null) {
      pointer = pointer.left;
    }
    return pointer;
  };

  const rotateLeft = (x: NodeRedBlack<T>) => {
    const y = x.right as NodeRedBlack<T>;
    x.right = y?.left as NodeRedBlack<T>;
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
  };

  const rotateRight = (x: NodeRedBlack<T>) => {
    const y = x.left as NodeRedBlack<T>;
    x.left = y?.right as NodeRedBlack<T>;
    if (y.right !== null) y.right.parent = x;
    y.parent = x.parent;
    if (x.parent === null) {
      root = y;
    } else if (x === x.parent.right) {
      x.parent.right = y;
    } else {
      x.parent.left = y;
    }
    y.right = x;
    x.parent = y;
  };

  const fixInsertion = (node: NodeRedBlack<T>) => {
    let pointer = node;
    while (pointer.parent && isRed(pointer.parent)) {
      const { parent } = pointer;
      const grandparent = parent.parent as NodeRedBlack<T>;
      if (parent === grandparent?.left) {
        const uncle = grandparent.right as NodeRedBlack<T>;
        if (isRed(uncle)) {
          parent.color = 'black';
          uncle.color = 'black';
          grandparent.color = 'red';
          pointer = grandparent;
        } else {
          if (pointer === parent.right) {
            pointer = parent;
            rotateLeft(pointer);
          }
          parent.color = 'black';
          grandparent.color = 'red';
          rotateRight(grandparent);
        }
      } else {
        const uncle = grandparent?.left as NodeRedBlack<T>;
        if (isRed(uncle)) {
          parent.color = 'black';
          uncle.color = 'black';
          grandparent.color = 'red';
          pointer = grandparent;
        } else {
          if (pointer === parent.left) {
            pointer = parent;
            rotateRight(pointer);
          }
          parent.color = 'black';
          grandparent.color = 'red';
          rotateLeft(grandparent);
        }
        if (pointer === root) break;
      }
    }
    if (root) root.color = 'black';
  };

  const insert = (id: number, value: T) => {
    let parent: NodeRedBlack<T> | null = null;
    let pointer = root;

    while (pointer !== null) {
      parent = pointer;
      if (id < pointer.id) {
        pointer = pointer.left;
      } else {
        pointer = pointer.right;
      }
    }

    const newNode = Node(id, value);
    newNode.parent = parent;

    if (parent === null) {
      root = newNode;
    } else if (newNode.id < parent.id) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    fixInsertion(newNode);
  };

  const fixDeletion = (node: NodeRedBlack<T>) => {
    if (node === null) return;
    let x = node;
    while (x !== root && x?.color === 'black') {
      if (x.parent && x === x.parent.left) {
        let w = x.parent.right as NodeRedBlack<T>;
        // case 1 => w is red (w is sibling)
        if (w.color === 'red') {
          w.color = 'black';
          x.parent.color = 'red';
          rotateLeft(x.parent);
          w = x.parent.right as NodeRedBlack<T>;
        }
        // case 2 => w is black + w.left and w.right are black
        if (w.left?.color === 'black' && w.right?.color === 'black') {
          w.color = 'red';
          x = x.parent;
        } else {
          // case 3 => w is black + w.left is red and w.right is black
          if (w.right?.color === 'black') {
            w.left!.color = 'black';
            w.color = 'red';
            rotateRight(w);
            w = x.parent.right as NodeRedBlack<T>;
          }
          // case 4 => w is black + w.right is red
          w.color = x.parent.color;
          x.parent.color = 'black';
          w.right!.color = 'black';
          rotateLeft(x.parent);
          x = root as NodeRedBlack<T>;
        }
      } else {
        // node === node.parent.right
        let w = x.parent?.left as NodeRedBlack<T>;
        // case 1 => w is red (w is sibling)
        if (w.color === 'red') {
          w.color = 'black';
          x.parent!.color = 'red';
          rotateRight(x.parent as NodeRedBlack<T>);
          w = x.parent?.left as NodeRedBlack<T>;
        }
        // case 2 => w is black + w.left and w.right are black
        if (w.right?.color === 'black' && w.left?.color === 'black') {
          w.color = 'red';
          x = x.parent as NodeRedBlack<T>;
        } else {
          // case 3 => w is black + w.left is red and w.right is black
          if (w.left?.color === 'black') {
            w.right!.color = 'black';
            w.color = 'red';
            rotateLeft(w);
            w = x.parent?.right as NodeRedBlack<T>;
          }
          // case 4 => w is black + w.right is red
          w.color = x.parent?.color as 'black' | 'red';
          x.parent!.color = 'black';
          w.left!.color = 'black';
          rotateRight(x.parent as NodeRedBlack<T>);
          x = root as NodeRedBlack<T>;
        }
      }
    }
    x.color = 'black';
  };

  const remove = (id: number) => {
    const z = searchById(id);
    if (!z) return undefined;
    let y = z;
    let yOriginalColor = y.color;
    // determine case
    let x: NodeRedBlack<T>;
    if (z.left === null) {
      // case 1 => left child is null
      x = z.right as NodeRedBlack<T>;
      transplant(z, z.right as NodeRedBlack<T>);
    } else if (z.right === null) {
      // case 2 => right child is null
      x = z.left;
      transplant(z, z.left);
    } else {
      // case 3 => neither child is null

      y = findMin(z.right);

      yOriginalColor = y.color;
      x = y.right as NodeRedBlack<T>;
      if (y.parent === z) {
        x.parent = y;
      } else {
        transplant(y, y.right as NodeRedBlack<T>);
        y.right = z.right;
        y.right.parent = y;
      }
      transplant(z, y);
      y.left = z.left;
      y.left.parent = y;
      y.color = z.color;
    }
    if (yOriginalColor === 'black') fixDeletion(x);
  };

  const levelOrderTraversal = () => {
    const temp = [];
    const queue = [];
    if (root) queue.push(root);
    while (queue.length) {
      const subTemp = [];
      const len = queue.length;
      for (let i = 0; i < len; i += 1) {
        const node: any = queue.shift();
        subTemp.push(`${node.id}-${node.color}`);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      temp.push(subTemp);
    }
    return temp;
  };

  return {
    insert,
    remove,
    search,
    levelOrderTraversal,
  };
};

export default RedBlackTree;
