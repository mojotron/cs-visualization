function arrayWithReplicatedItems(
  length: number,
  element: string | number | boolean | null
): (string | number | boolean | null)[] {
  // Recursion
  if (length <= 0) return []; // base case
  return arrayWithReplicatedItems(length - 1, element).concat(element); // recursive case
  // return [...arrayWithReplicatedItems(length - 1, element), element];
}

export default arrayWithReplicatedItems;
