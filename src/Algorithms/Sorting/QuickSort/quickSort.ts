/* eslint-disable no-param-reassign */
// select one of the element from the list (any element) => pivot element
// rearrange list => lesser | pivot | greater
// example
// [7, 2, 1, 6, 8, 5, 3, 4]
// [2, 1, 3]  [4]  [8, 5, 7, 6]
// after partition two new sub-problems (lesset and grater) =>
// divide and conquer recursive
// base case =>
// recursive case =>
// to keep space complexity O(1) => sort in place, not making arr copyes
// we use arr referece and swop elements in original array

// helpers
const swap = <T>(arrRef: T[], startIndex: number, endIndex: number) => {
  const temp = arrRef[startIndex];
  arrRef[startIndex] = arrRef[endIndex];
  arrRef[endIndex] = temp;
};
// partition function
const partition = <T>(arrRef: T[], startIndex: number, endIndex: number) => {
  const pivot = arrRef[endIndex];
  let pivotIndex = startIndex;
  // loop through array and swap elements if element <= pivot and increment pivot
  for (let i = startIndex; i < endIndex; i += 1) {
    if (arrRef[i] <= pivot) {
      swap(arrRef, i, pivotIndex);
      pivotIndex += 1;
    }
  }
  // after loop array looks [elements|pivot] =>
  // [lesser<pivotIndex></pivotIndex>greater|pivot] => swap pivot with element
  // at pivot index element => [lesser|pivot|grater]
  swap(arrRef, pivotIndex, endIndex);
  return pivotIndex;
};
// quick sort recursive function

const quickSortRecursion = <T>(
  arrRef: T[],
  startIndex: number,
  endIndex: number
) => {
  if (startIndex > endIndex) return; // base case => array have one element = sorted
  const pivotIndex = partition(arrRef, startIndex, endIndex);
  quickSortRecursion(arrRef, 0, pivotIndex - 1);
  quickSortRecursion(arrRef, pivotIndex + 1, endIndex);
};

const quickSort = <T>(arrRef: T[]) => {
  quickSortRecursion(arrRef, 0, arrRef.length - 1);
};

export default quickSort;
