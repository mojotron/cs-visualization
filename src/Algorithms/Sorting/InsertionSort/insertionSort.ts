type InputType = number[] | string[];

function insertionSort(arr: InputType): InputType {
  const copy = [...arr] as InputType;
  for (let i = 1; i < copy.length; i += 1) {
    for (let j = i; j > 0; j -= 1) {
      if (copy[j] < copy[j - 1]) {
        const temp = copy[j];
        copy[j] = copy[j - 1];
        copy[j - 1] = temp;
      }
    }
  }
  return copy;
}

export default insertionSort;
