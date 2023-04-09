type SortInput = number[] | string[];

function selectionSort(arr: SortInput): SortInput {
  const copy = [...arr] as SortInput;
  let smallestValue;
  let smallestIndex;

  for (let i = 0; i < copy.length; i += 1) {
    smallestValue = copy[i];
    smallestIndex = i;

    for (let j = i; j < copy.length; j += 1) {
      if (copy[j] < smallestValue) {
        smallestValue = copy[j];
        smallestIndex = j;
      }
    }

    if (smallestIndex !== i) {
      const temp = copy[i];
      copy[i] = copy[smallestIndex];
      copy[smallestIndex] = temp;
    }
  }
  return copy;
}

export default selectionSort;
