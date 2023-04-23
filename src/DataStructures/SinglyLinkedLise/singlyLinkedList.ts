type NodeType<T> = {
  value: T;
  next: null | NodeType<T>;
};

function Node<T>(value: T): NodeType<T> {
  return {
    value,
    next: null,
  };
}

type SinglyLinkedListType<T> = {
  length: number;
  head: T | null;
  tail: T | null;
  append: (value: T) => number;
  prepend: (value: T) => number;
  insert: (index: number, value: T) => number | undefined;
  pop: () => T | undefined;
  shift: () => T | undefined;
  deleteAt: (index: number) => T | undefined;
  forEach: (callback: (value: T, index: number) => void) => void;
  print: () => void;
  search: (callback: (ele: T, index: number) => boolean) => T | undefined;
  reverse: () => SinglyLinkedListType<T>;
  reverseInPlace: () => void;
  sort: () => SinglyLinkedListType<T>;
};

function SinglyLinkedList<T>(): SinglyLinkedListType<T> {
  let length = 0;
  let head: null | NodeType<T> = null;
  let tail: null | NodeType<T> = head;

  const addFirstNode = (value: T): number => {
    head = Node(value);
    tail = head;
    length += 1;
    return length;
  };
  // traverse
  const forEach = (callback: (value: T, index: number) => void): void => {
    let position = 0;
    let pointer = head;

    while (pointer) {
      callback(pointer.value, position);
      position += 1;
      pointer = pointer.next;
    }
    // pointer to null (last element) is not returned
  };

  // insertion
  const append = (value: T): number => {
    if (head === null) return addFirstNode(value);
    const newNode = Node(value);
    // TS The left-hand side of assignment expression may not be an optional property access
    tail!.next = newNode;
    tail = newNode;
    length += 1;
    return length;
  };

  const prepend = (value: T): number => {
    if (head === null) return addFirstNode(value);
    const newNode = Node(value);
    const shift = head;
    head = newNode;
    head.next = shift;
    length += 1;
    return length;
  };

  const insert = (index: number, value: T): number | undefined => {
    if (index < 0 || index > length) return;
    if (index === 0) return prepend(value);
    if (index === length) return append(value);

    let position = 0;
    let pointer = head;
    // insert before target pointer(index - 1)
    while (position < index - 1) {
      position += 1;
      pointer = pointer!.next;
    }

    const shift = pointer!.next;
    const newNode = Node(value);
    newNode.next = shift;
    pointer!.next = newNode;

    length += 1;
    return length;
  };

  const removeFirstItem = (): T | undefined => {
    if (head === null) return;
    const { value } = head;
    head = null;
    tail = null;
    length = 0;
    return value;
  };

  // deletion
  const pop = (): T | undefined => {
    if (head === null) return undefined;
    if (length === 1) return removeFirstItem();

    let pointer = head;
    let pointerNext = head.next;

    while (pointerNext!.next !== null) {
      pointer = pointer.next as NodeType<T>;
      pointerNext = pointer.next as NodeType<T>;
    }

    pointer.next = null;
    tail = pointer;
    length -= 1;
    return pointerNext!.value;
  };

  const shift = (): T | undefined => {
    if (head === null) return;
    if (length === 1) return removeFirstItem();

    const { value } = head;
    head = head.next;
    length -= 1;
    return value;
  };

  const deleteAt = (index: number): T | undefined => {
    if (head === null || index < 0 || index > length - 1) return undefined;
    if (index === 0) return shift();
    if (index === length - 1) return pop();

    let pointer = head;
    for (let i = 0; i < index - 1; i += 1) {
      pointer = pointer.next as NodeType<T>;
    }

    const deletedNode = pointer.next;
    pointer.next = deletedNode!.next;
    length -= 1;
    return deletedNode!.value;
  };

  const print = () => {
    const result: (T | null)[] = [];
    forEach((value) => result.push(value));
    result.push(null);
    console.log(result.join('->'));
  };

  const search = (
    callback: (ele: T, index: number) => boolean
  ): T | undefined => {
    if (head === null) return undefined;
    let position = 0;
    let pointer = head;
    while (pointer !== null) {
      if (callback(pointer.value, position)) return pointer.value;
      position += 1;
      pointer = pointer.next as NodeType<T>;
    }
    return undefined;
  };

  const reverse = (): SinglyLinkedListType<T> => {
    // using stack method O(2n)
    const reversed = SinglyLinkedList<T>();
    const stack: T[] = [];
    forEach((value) => stack.push(value));
    while (stack.length > 0) {
      reversed.append(stack.pop() as T);
    }
    return reversed;
  };

  const reverseInPlace = (): void => {
    let prev = null;
    let current = head;

    while (current) {
      const temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    head = prev;
  };

  const sort = (): SinglyLinkedListType<T> => {
    return SinglyLinkedList<T>();
  };

  return {
    // getters
    get head(): T | null {
      if (head?.value) return head.value;
      return null;
    },
    get tail(): T | null {
      if (tail?.value) return tail.value;
      return null;
    },
    get length(): number {
      return length;
    },
    forEach,
    // insertion
    append,
    prepend,
    insert,
    // deletion
    pop,
    shift,
    deleteAt,
    //
    search,
    reverse,
    sort,
    print,
    reverseInPlace,
  };
}

export default SinglyLinkedList;
