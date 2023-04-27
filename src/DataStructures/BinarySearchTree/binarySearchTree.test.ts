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
    expect(bst.search(100, 'depth')).toBe(undefined);
  });

  test('delete element from bst', () => {
    const bst = BinarySearchTree<number>();
    bst.insert(12); // 5 15
    bst.insert(5); // 3 7
    bst.insert(3); // 1
    bst.insert(1); // leaf
    bst.insert(7); // 9
    bst.insert(9); // leaf
    bst.insert(15); // 13 17
    bst.insert(13); // leaf
    bst.insert(17); // 19
    bst.insert(19); // leaf

    let currentBts: number[] = [];
    bst.forEach('inOrder', (v) => currentBts.push(v));
    expect(currentBts).toEqual([1, 3, 5, 7, 9, 12, 13, 15, 17, 19]);

    // case 1 => delete leaf
    const x = bst.remove(15);
    currentBts = [];
    bst.forEach('inOrder', (v) => currentBts.push(v));
    console.log(currentBts);

    expect(currentBts).toEqual([1, 3, 5, 9, 12, 13, 17, 19]);
  });
});
