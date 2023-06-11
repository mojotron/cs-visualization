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
    console.log('r l');

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
        console.log('left heavy');
        const uncle = grandparent.right;
        if (uncle?.color === 'red') {
          console.log('left heavy uncle red');
          parent.color = 'black';
          uncle.color = 'black';
          grandparent.color = 'red';
          pointer = grandparent;
        } else {
          console.log('left heavy uncle black');
          if (pointer === parent.right) {
            pointer = parent;
            rotateLeft(pointer);
          }
          parent.color = 'black';
          grandparent.color = 'red';
          rotateRight(grandparent);
        }
      } else {
        console.log('right heavy');
        const uncle = grandparent?.left;
        if (uncle?.color === 'red') {
          console.log('right heavy uncle red');
          parent.color = 'black';
          uncle.color = 'black';
          grandparent.color = 'red';
          pointer = grandparent;
        } else {
          console.log('right heavy uncle black');
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
    root.color = 'black';
  };

  return {
    get root() {
      return root;
    },
    insertNode,
  };
};

const rbt = RBTree();
rbt.insertNode(5);
rbt.insertNode(4);
rbt.insertNode(3);
rbt.insertNode(2);
rbt.insertNode(1);

console.log(rbt.root);
