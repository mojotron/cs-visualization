/* eslint-disable no-param-reassign */
type Input = number[] | string[];

export const heapify = (arr: Input, heapSize: number, rootIndex: number) => {
  const leftChild = 2 * rootIndex + 1;
  const rightChild = 2 * rootIndex + 2;
  let largest = rootIndex;

  if (leftChild < heapSize && arr[leftChild] > arr[largest])
    largest = leftChild;

  if (rightChild < heapSize && arr[rightChild] > arr[largest])
    largest = rightChild;

  if (largest !== rootIndex) {
    const swap = arr[rootIndex];
    arr[rootIndex] = arr[largest];
    arr[largest] = swap;

    heapify(arr, heapSize, largest);
  }
};

export const buildMaxHeap = (arr: Input) => {
  // determine leaves => Math.floor(arr.length / 2) - 1
  // all nodes after result of formula are already leafs
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i -= 1) {
    heapify(arr, arr.length, i);
  }
};

export const heapSort = (arr: Input): void => {
  buildMaxHeap(arr);
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const swap = arr[0];
    arr[0] = arr[i];
    arr[i] = swap;

    heapify(arr, i, 0);
  }
};
