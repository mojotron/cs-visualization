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

  test.only('delete x element from bst', () => {
    const bst = BinarySearchTree<number>();
    bst.insert(8); // 5 15
    bst.insert(3); // 3 7
    bst.insert(1); // 1
    bst.insert(6); // leaf
    bst.insert(4); // 9
    bst.insert(7); // leaf
    bst.insert(10); // 13 17
    bst.insert(14); // leaf
    bst.insert(13); // 19

    const x = bst.breathFirstTraversal();
    expect(x).toEqual([8, 3, 10, 1, 6, 14, 4, 7, 13]);
    const y = bst.breathFirstRecursive();
    expect(y).toEqual([8, 3, 10, 1, 6, 14, 4, 7, 13]);

    // let currentBts: number[] = [];
    // bst.forEach('inOrder', (v) => currentBts.push(v));
    // expect(currentBts).toEqual([1, 7, 8, 10, 11, 12, 15, 16, 18, 25, 30, 36]);

    // case 1 => delete leaf
    // const x = bst.remove(18);
    // expect(x).toBe(undefined);
    // currentBts = [];
    // bst.forEach('inOrder', (v) => currentBts.push(v));
    // console.log(currentBts);

    // expect(currentBts).toEqual([1, 7, 8, 10, 11, 12, 15, 16, 25, 30, 36]);
  });

  test('x', () => {
    const bst = BinarySearchTree<number>();
    bst.insert(18); // 5 15
    let currentBts: number[] = [];
    bst.forEach('inOrder', (v) => currentBts.push(v));
    expect(currentBts).toEqual([18]);

    // case 1 => delete leaf
    const x = bst.remove(18);
    // expect(x).toBe(undefined);
    currentBts = [];
    bst.forEach('inOrder', (v) => currentBts.push(v));
    console.log(currentBts);

    expect(currentBts).toEqual([]);
  });
});
