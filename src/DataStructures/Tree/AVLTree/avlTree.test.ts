import { describe, test, expect } from 'vitest';
import AVLTree from './avlTree';

describe('Self balancing tree AVL', () => {
  test('height of tree', () => {
    const avl = AVLTree<number>();
    expect(avl.height).toBe(0);
    avl.insert('F', 1);
    avl.insert('B', 1);
    avl.insert('A', 1);
    avl.insert('D', 1);
    avl.insert('E', 1);
    avl.insert('C', 1);
    avl.insert('G', 1);
    const nodes: string[] = [];
    avl.forEach('inOrder', (id: string) => nodes.push(id));
    console.log(nodes);
  });

  describe('insert new node and balance tree', () => {
    test('left left rotation', () => {});
  });
});
