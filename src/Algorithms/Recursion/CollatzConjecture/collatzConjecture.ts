function collatzConjecture(integer: number): number | never {
  if (integer < 1 || !Number.isInteger(integer))
    throw new Error('input must be integer greater then the 0');
  // Recursion
  if (integer === 1) return 0; // base case
  if (integer % 2 === 0) return 1 + collatzConjecture(integer / 2); // recursive call for even number greater then 1
  return 1 + collatzConjecture(3 * integer + 1); // recursive call for odd number greater then 1
}

export default collatzConjecture;
