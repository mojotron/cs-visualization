import { describe, test, expect } from 'vitest';
import RedBlackTree from './redBlackTree';

describe('Red Black Tree', () => {
  describe('insertion', () => {
    test('happy path', () => {
      const rbt = RedBlackTree<string>();
      rbt.insert(8, 'X');
      rbt.insert(5, 'X');
      rbt.insert(15, 'X');
      rbt.insert(12, 'X');
      rbt.insert(19, 'X');
      rbt.insert(9, 'X');
      rbt.insert(13, 'X');
      rbt.insert(23, 'X');
      rbt.insert(25, 'X');
      rbt.insert(17, 'X');
      console.log(rbt.levelOrderTraversal());
      rbt.remove(15);
      console.log(rbt.levelOrderTraversal());
    });
  });
});
