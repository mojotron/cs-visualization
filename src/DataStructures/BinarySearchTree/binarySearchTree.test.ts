import { describe, test, expect } from 'vitest';
import BinarySearchTree from './binarySearchTree';

describe('Binary Search Tree', () => {
  test('insert element - create perfect binary tree', () => {
    const bst = BinarySearchTree<number>();
    bst.insert(50);
    bst.insert(30);
    bst.insert(20);
    bst.insert(40);
    bst.insert(70);
    bst.insert(60);
    bst.insert(80);
    const inOrder: number[] = [];
    bst.forEach('inOrder', (v) => inOrder.push(v));
    expect(inOrder).toEqual([20, 30, 40, 50, 60, 70, 80]);
    const preOrder: number[] = [];
    bst.forEach('preOrder', (v) => preOrder.push(v));
    expect(preOrder).toEqual([50, 30, 20, 40, 70, 60, 80]);
    const postOrder: number[] = [];
    bst.forEach('postOrder', (v) => postOrder.push(v));
    expect(postOrder).toEqual([20, 40, 30, 60, 80, 70, 50]);

    expect(bst.search(80, 'depth')).toBe(80);
  });
});
