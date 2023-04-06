function sumOfAnArray(arr: number[]): number {
  // Recursion
  if (arr.length === 0) return 0; // base case
  return arr[0] + sumOfAnArray(arr.slice(1)); // recursive case (for product of an array replace + with *)
}

export default sumOfAnArray;
