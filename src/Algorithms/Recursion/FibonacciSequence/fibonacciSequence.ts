// O(2^n) => iterative way is better here
const calculateFibonacci = (number: number): number => {
  if (number <= 1) return number;
  return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
};
// NOTE **
const fibonacciSequence = (length: number): number[] | never => {
  if (length < 0 || !Number.isInteger(length))
    throw new Error('input must be positive integer');

  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(calculateFibonacci(i));
  }
  return result;
};

// O(n)
const fibonacciSequenceIterative = (length: number): number[] => {
  if (length < 0 || !Number.isInteger(length))
    throw new Error('input must be positive integer');

  const sequence: number[] = [];
  for (let i = 0; i < length; i += 1) {
    if (i === 0) sequence.push(0);
    else if (i === 1) sequence.push(1);
    else sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  return sequence;
};

export default fibonacciSequence;
