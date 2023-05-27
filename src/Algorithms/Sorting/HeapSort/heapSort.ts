const heapSort = () => {};

export default heapSort;
/* START
// maintain heap property
const heapify = (array: number[], heapSize: number, rootIndex: number) => {
  const leftChild = 2 * rootIndex + 1;
  const rightChild = 2 * rootIndex + 2;
  let largest = rootIndex;
  if (leftChild < heapSize && array[leftChild] > array[rootIndex])
    largest = leftChild;
  if (rightChild < heapSize && array[rightChild] > array[largest])
    largest = rightChild;
  if (rootIndex !== largest) {
    const temp = array[rootIndex];
    array[rootIndex] = array[largest];
    array[largest] = temp;
    heapify(array, heapSize, largest);
  }
};

const buildMaxHeap = (arr: number[]) => {
  // determine leaves => Math.floor(arr.length / 2) - 1
  // all nodes after result of formula are already leafs
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i -= 1) {
    heapify(arr, arr.length, i);
  }
};

const heapSort = (arr: number[]) => {
  buildMaxHeap(arr); // in place
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    // bring largest/lowest element to the root after swap
    heapify(arr, i, 0);
  }
};
END */
