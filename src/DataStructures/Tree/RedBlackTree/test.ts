const RBNode = (id: number) => {
  return {
    id,
    left: null,
    right: null,
    parent: null,
    color: 'red',
  };
};

const RBTree = () => {
  let root: any = null;

  const rotateLeft = (node: any) => {
    const temp = node.right;
    node.right = temp.left;
    if (temp.left !== null) temp.left.parent = node;
    temp.parent = node.parent;
    if (node.parent === null) {
      root = temp;
    } else if (node === node.parent.left) {
      node.parent.left = temp;
    } else {
      node.parent.right = temp;
    }
    temp.left = node;
    node.parent = temp;
  };

  const rotateRight = (node: any) => {
    const temp = node.left;
    node.left = temp.right;
    if (temp.right !== null) temp.right.parent = node;
    temp.parent = node.parent;
    if (node.parent === null) {
      root = temp;
    } else if (node === node.parent.right) {
      node.parent.right = temp;
    } else {
      node.parent.left = temp;
    }
    temp.right = node;
    node.parent = temp;
  };

  const fixInsertion = (node: any) => {
    let pointer = node;
    while (pointer.parent && pointer.parent.color === 'red') {
      const { parent } = pointer;
      const grandparent = parent.parent;
      if (parent === grandparent?.left) {
        const uncle = grandparent.right;
        if (uncle?.color === 'red') {
          parent.color = 'black';
          uncle.color = 'black';
          grandparent.color = 'red';
          pointer = grandparent;
        } else {
          if (pointer === parent.right) {
            pointer = parent;
            rotateLeft(pointer);
          }
          parent.color = 'black';
          grandparent.color = 'red';
          rotateRight(grandparent);
        }
      } else {
        const uncle = grandparent?.left;
        if (uncle?.color === 'red') {
          parent.color = 'black';
          uncle.color = 'black';
          grandparent.color = 'red';
          pointer = grandparent;
        } else {
          if (pointer === parent.left) {
            pointer = parent;
            rotateRight(pointer);
          }
          parent.color = 'black';
          grandparent.color = 'red';
          rotateLeft(grandparent);
        }
        if (pointer === root) break;
      }
    }
    root.color = 'black';
  };

  const insertNode = (id: number) => {
    let parent: any = null;
    let pointer = root;

    while (pointer !== null) {
      parent = pointer;
      if (id < pointer.id) {
        pointer = pointer.left;
      } else {
        pointer = pointer.right;
      }
    }

    const newNode = RBNode(id);
    newNode.parent = parent;

    if (parent === null) {
      root = newNode;
    } else if (newNode.id < parent.id) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    fixInsertion(newNode);
  };

  const print = () => {
    const inOrder = (node: any) => {
      if (node !== null) {
        inOrder(node.left);
        console.log(node.id);
        inOrder(node.right);
      }
    };

    inOrder(root);
  };

  // DELETION
  const search = (id: number, rootNode = root): any => {
    if (rootNode === null) return undefined;
    if (rootNode.id === id) return rootNode;
    if (id < rootNode.id) return search(id, rootNode.left);
    if (id > rootNode.id) return search(id, rootNode.right);
  };
  // transplant
  const transplant = (currentNode: any, newNode: any) => {
    const { parent } = currentNode;
    if (parent === null) root = newNode;
    else if (currentNode === parent.left) parent.left = newNode;
    else parent.right = newNode;
    newNode.parent = currentNode.parent;
  };

  const getNextMinimum = (node: any) => {
    let pointer = root;
    while (pointer.left !== null) {
      pointer = pointer.left;
    }
    return pointer;
  };

  const fixDeletion = () => {};

  const deleteNode = (id: number) => {};
  //
  const levelOrderTraversal = () => {
    const temp = [];
    const queue = [];
    if (root) queue.push(root);
    while (queue.length) {
      const subTemp = [];
      const len = queue.length;
      for (let i = 0; i < len; i += 1) {
        const node: any = queue.shift();
        subTemp.push(`${node.id}-${node.color}`);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      temp.push(subTemp);
    }
    return temp;
  };

  return {
    get root() {
      return root;
    },
    insertNode,
    print,
    levelOrderTraversal,
  };
};

const rbt = RBTree();
rbt.insertNode(8);
rbt.insertNode(5);
rbt.insertNode(15);
rbt.insertNode(12);
rbt.insertNode(19);
rbt.insertNode(9);
rbt.insertNode(13);
rbt.insertNode(23);
rbt.insertNode(25);
rbt.insertNode(17);

const x = rbt.levelOrderTraversal();
console.log(x);
