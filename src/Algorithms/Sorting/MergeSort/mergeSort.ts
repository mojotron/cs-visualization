type InputType = number[] | string[];

function merge(arrA: InputType, arrB: InputType): InputType {
  let sorted: InputType = [];

  while (arrA.length > 0 && arrB.length > 0) {
    if (arrA[0] > arrB[0]) sorted = [...sorted, arrB.shift()] as InputType;
    else sorted = [...sorted, arrA.shift()] as InputType;
  }

  if (arrA.length === 0 && arrB.length > 0)
    sorted = [...sorted, ...arrB] as InputType;

  if (arrB.length === 0 && arrA.length > 0)
    sorted = [...sorted, ...arrA] as InputType;

  return sorted;
}

function mergeSort(arr: InputType): InputType {
  if (arr.length === 0) return arr;

  if (arr.length === 1) return arr;
  const half = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, half)), mergeSort(arr.slice(half)));
}

export default mergeSort;
