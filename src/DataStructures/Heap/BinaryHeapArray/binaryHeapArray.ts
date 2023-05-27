/* eslint-disable no-param-reassign */

import { HeapType, NodeType } from '../types';

const Node = <T>(id: number, value: T): NodeType<T> => {
  return { id, value };
};

// MAX HEAP first
const BinaryHeapArray = <T>(size: number): HeapType<T> => {
  const maxLength = size;
  const heap: NodeType<T>[] = [];

  // helpers
  const swap = (indexA: number, indexB: number): void => {
    const temp = heap[indexA];
    heap[indexA] = heap[indexB];
    heap[indexB] = temp;
  };

  const validIndex = (index: number) => !!heap[index];

  const biggerChild = (
    leftChildIndex: number,
    rightChildIndex: number
  ): number => {
    return heap[leftChildIndex].id > heap[rightChildIndex].id
      ? leftChildIndex
      : rightChildIndex;
  };

  const bubbleUp = (index: number): void => {
    let childIndex = index;
    while (childIndex > 0) {
      const parentIndex = Math.floor((childIndex - 1) / 2);
      if (heap[childIndex].id > heap[parentIndex].id) {
        swap(childIndex, parentIndex);
        childIndex = parentIndex;
      } else {
        break;
      }
    }
  };

  const bubbleDown = (index: number): void => {
    let parentIndex = index;
    // loop while parent has left child => right child would invalidate heap (complete BT mast have fille level)
    while (heap[parentIndex * 2 + 1]) {
      const leftChild = 2 * parentIndex + 1;
      const rightChild = 2 * parentIndex + 2;

      if (!validIndex(leftChild) && !validIndex(rightChild)) break;

      let biggerIndex;
      if (validIndex(leftChild) && validIndex(rightChild)) {
        biggerIndex = biggerChild(leftChild, rightChild);
      } else {
        biggerIndex = leftChild;
      }

      if (heap[parentIndex].id < heap[biggerIndex].id) {
        swap(parentIndex, biggerIndex);
        parentIndex = biggerIndex;
      } else {
        break;
      }
    }
  };
  //
  const stringify = () => {
    return heap.map((node) => node?.id).join(' ');
  };

  const insert = (priority: number, value: T) => {
    if (heap.length === maxLength) throw new Error('Heap max limit reached!');
    const newNode = Node(priority, value);
    heap.push(newNode);
    bubbleUp(heap.length - 1);
  };

  const extract = () => {
    if (heap.length === 0) return undefined;
    const { value } = heap[0];
    const lastNode = heap.pop() as NodeType<T>;
    if (heap.length === 0) return value;
    heap[0] = lastNode;
    bubbleDown(0);
    return value;
  };

  const peek = () => {
    if (heap.length === 0) return undefined;
    const peekValue = heap[0].value;
    if (typeof peekValue === 'object' && Array.isArray(peekValue))
      return [...peekValue] as T;
    if (typeof peekValue === 'object' && !Array.isArray(peekValue))
      return { ...peekValue } as T;
    return peekValue;
  };

  return { stringify, insert, extract, peek };
};

export default BinaryHeapArray;
