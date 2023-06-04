import { describe, test, expect } from 'vitest';
import AVLTree from './avlTree';

describe('Self balancing tree AVL', () => {
  test('height of tree', () => {
    const avl = AVLTree<number>();
    expect(avl.height).toBe(0);
    avl.insert('F', 1);
    expect(avl.height).toBe(1);
    avl.insert('B', 1);
    expect(avl.height).toBe(2);
    avl.insert('A', 1);
    expect(avl.height).toBe(2);
    avl.insert('D', 1);
    expect(avl.height).toBe(3);
    avl.insert('E', 1);
    expect(avl.height).toBe(3);
    avl.insert('C', 1);
    expect(avl.height).toBe(3);
    avl.insert('G', 1);
    expect(avl.height).toBe(3);
  });

  describe('insert new node and balance tree', () => {
    test('basic left left rotation', () => {
      const avl = AVLTree<number>();
      avl.insert('C', 1);
      avl.insert('B', 1);
      avl.insert('A', 1);
      const nodes: string[] = [];
      avl.forEach('inOrder', (id: string) => nodes.push(id));
      expect(nodes).toEqual(['A', 'B', 'C']); // keep sorted property with inorder traversal
    });

    test('basic left right rotation', () => {
      const avl = AVLTree<number>();
      avl.insert('C', 1);
      avl.insert('A', 1);
      avl.insert('B', 1);
      const nodes: string[] = [];
      avl.forEach('inOrder', (id: string) => nodes.push(id));
      expect(nodes).toEqual(['A', 'B', 'C']);
    });

    test('basic right right rotation', () => {
      const avl = AVLTree<number>();
      avl.insert('A', 1);
      avl.insert('B', 1);
      avl.insert('C', 1);
      const nodes: string[] = [];
      avl.forEach('inOrder', (id: string) => nodes.push(id));
      expect(nodes).toEqual(['A', 'B', 'C']);
    });

    test('basic right left rotation', () => {
      const avl = AVLTree<number>();
      avl.insert('C', 1);
      avl.insert('B', 1);
      avl.insert('A', 1);
      const nodes: string[] = [];
      avl.forEach('inOrder', (id: string) => nodes.push(id));
      expect(nodes).toEqual(['A', 'B', 'C']);
    });

    test('full example insertion', () => {
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
      expect(nodes).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
    });
  });

  describe('delete node', () => {
    test('temp test', () => {
      const avl = AVLTree<number>();
      avl.insert('C', 3); //        C
      avl.insert('B', 2); //       / \
      avl.insert('F', 6); //      B   F
      avl.insert('A', 1); //     /   / \
      avl.insert('E', 5); //    A   E   G
      avl.insert('G', 7); //       /
      avl.insert('D', 4); //      D

      const x = avl.remove('X');
      expect(x).toBe(undefined);

      let nodes: string[] = [];
      const b = avl.remove('B');
      avl.forEach('inOrder', (id: string) => nodes.push(id));
      expect(nodes).toEqual(['A', 'C', 'D', 'E', 'F', 'G']);
      expect(b).toBe(2);

      nodes = [];
      const c = avl.remove('C');
      avl.forEach('inOrder', (id: string) => nodes.push(id));
      expect(nodes).toEqual(['A', 'D', 'E', 'F', 'G']);
      expect(c).toBe(3);

      nodes = [];
      const e = avl.remove('E');
      avl.forEach('inOrder', (id: string) => nodes.push(id));
      expect(nodes).toEqual(['A', 'D', 'F', 'G']);
      expect(e).toBe(5);

      nodes = [];
      const d = avl.remove('D');
      avl.forEach('inOrder', (id: string) => nodes.push(id));
      expect(nodes).toEqual(['A', 'F', 'G']);
      expect(d).toBe(4);

      nodes = [];
      const f = avl.remove('F');
      avl.forEach('inOrder', (id: string) => nodes.push(id));
      expect(nodes).toEqual(['A', 'G']);
      expect(f).toBe(6);

      nodes = [];
      const g = avl.remove('G');
      avl.forEach('inOrder', (id: string) => nodes.push(id));
      expect(nodes).toEqual(['A']);
      expect(g).toBe(7);

      nodes = [];
      const a = avl.remove('A');
      avl.forEach('inOrder', (id: string) => nodes.push(id));
      expect(nodes).toEqual([]);
      expect(a).toBe(1);

      const y = avl.remove('Y');
      expect(y).toBe(undefined);
    });
  });
});
