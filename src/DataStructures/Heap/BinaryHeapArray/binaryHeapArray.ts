type Node<T> = {
  id: number;
  value: T;
};

type TempHeap<T> = {
  print: () => string;
  insert: (id: number, value: T) => void;
};

const BinaryHeapArray = <T>(size: number): TempHeap<T> => {
  const heap: (Node<T> | null)[] = Array.from({ length: size }, () => null);

  const print = () => {
    return heap.filter((node) => node?.id).join(' ');
  };

  const insert = (id: number, value: T) => {};

  return { print, insert };
};

export default BinaryHeapArray;
