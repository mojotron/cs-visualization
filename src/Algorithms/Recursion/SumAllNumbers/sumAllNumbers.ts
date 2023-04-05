function sumAllNumbers(input: number): number | never {
  if (!Number.isInteger(input)) throw new Error('input must be integer');
  // Recursion
  if (input === 0) return input; // base case
  return input + sumAllNumbers(input > 0 ? input - 1 : input + 1); // recursive case
}

export default sumAllNumbers;
