const calculateFibonacci = (number: number): number => {
  if (number <= 1) return number;
  return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
};

const fibonacciSequence = (length: number): number[] | never => {
  if (length < 0 || !Number.isInteger(length))
    throw new Error('input must be positive integer');

  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(calculateFibonacci(i));
  }
  return result;
};

export default fibonacciSequence;
