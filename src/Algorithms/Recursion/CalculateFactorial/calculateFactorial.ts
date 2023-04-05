function calculateFactorial(integer: number): number {
  if (!Number.isInteger(integer))
    throw new Error('input must be integer not float');
  if (integer < 0) throw new Error('input must be integer >= 0');
  // Recursion
  if (integer === 1 || integer === 0) return 1; // base case
  return integer * calculateFactorial(integer - 1); // recursive case
}

export default calculateFactorial;
