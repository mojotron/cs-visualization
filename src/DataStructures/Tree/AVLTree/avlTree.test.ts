import { describe, test, expect } from 'vitest';
import AVLTree from './avlTree';

describe('Self balancing tree AVL', () => {
  test('height of tree', () => {
    const avl = AVLTree<number>();
    expect(avl.height).toBe(0);
    avl.insert('A', 1);
    expect(avl.height).toBe(1);
    avl.insert('B', 1);
    expect(avl.height).toBe(2);
    avl.insert('C', 1);
    expect(avl.height).toBe(3);
    avl.insert('D', 1);
    expect(avl.height).toBe(4);
  });
  describe('insert new node and balance tree', () => {
    test('left left rotation', () => {});
  });
});
