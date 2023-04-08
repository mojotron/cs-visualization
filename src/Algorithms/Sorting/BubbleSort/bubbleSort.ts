// Bubble Sort is the simplest sorting algorithm that works by repeatedly
// swapping the adjacent elements if they are in the wrong order. This
// algorithm is not suitable for large data sets as its average and worst-case
// time complexity is quite high.
// Worst case O(n2) - list is revers order
// Best case Omega(N) - list in order

type SortInput = number[] | string[];

const swap = (arr: SortInput, i: number, j: number): SortInput => {
  const arrCopy = [...arr] as SortInput;
  const valueAtI = arrCopy[i];
  arrCopy[i] = arrCopy[j];
  arrCopy[j] = valueAtI;

  return arrCopy;
};

function bubbleSort(arr: SortInput): SortInput {
  let copy = [...arr] as SortInput;
  let swapFlag = -1;

  for (let i = 0; i < copy.length; i += 1) {
    swapFlag = 0;
    for (let j = 0; j < copy.length - 1 - i; j += 1) {
      if (copy[j] > copy[j + 1]) {
        copy = swap(copy, j, j + 1);
        swapFlag += 1;
      }
    }
    if (swapFlag === 0) break;
  }
  return copy;
}

export default bubbleSort;
