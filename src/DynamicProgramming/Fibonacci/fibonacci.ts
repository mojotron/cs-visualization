const fibonacci = (number: number) => {
  if (number <= 1) return number;
  return fibonacci(number - 1) + fibonacci(number - 2);
};

const fibonacciMemoized = () => {
  const cache = {};

  return (number: number) => {};
};

export default fibonacciMemoized;
