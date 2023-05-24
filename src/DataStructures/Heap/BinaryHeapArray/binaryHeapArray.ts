type NodeType<T> = {
  id: number;
  value: T;
};

const Node = <T>(id: number, value: T): NodeType<T> => {
  return { id, value };
};

type TempHeap<T> = {
  print: () => string;
  insert: (id: number, value: T) => void;
};

const BinaryHeapArray = <T>(type: 'max' | 'min', size: number): TempHeap<T> => {
  const maxLength = size;
  const heap: (NodeType<T> | null)[] = [];

  const print = () => {
    return heap.map((node) => node?.id).join(' ');
  };

  // maintains heap property (max/min)
  const maxHeapify = (arr: NodeType[], heapSize: number, index: number) => {};

  const minHeapify = () => {};

  const insert = (id: number, value: T) => {
    if (heap.length === maxLength) return undefined;
    const newNode = Node(id, value);
    heap.push(newNode);
    let index = heap.length - 1;

    while (index !== 0) {
      console.log(index);
      const parent = Math.floor(index / 2);
      if (heap[index]!.id >= heap[parent]!.id) {
        const temp = heap[index];
        heap[index] = heap[parent];
        heap[parent] = temp;
        console.log('x');
        index = parent;
      } else {
        index = 0;
      }
    }

    console.log(newNode);
  };

  return { print, insert };
};

export default BinaryHeapArray;
