function sumAllNumbers(input: number): number | never {
  if (!Number.isInteger(input)) throw new Error('input must be integer');
  // Recursion
  // base case
  if (input === 0) return input;
  // recursive case
  return input + sumAllNumbers(input > 0 ? input - 1 : input + 1);
}

export default sumAllNumbers;
