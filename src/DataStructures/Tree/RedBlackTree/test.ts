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
  const transplant = (u: any, v: any) => {
    if (u.parent === null) root = v;
    else if (u === u.parent.left) u.parent.left = v;
    else u.parent.right = v;
    if (v) v.parent = u.parent;
  };

  const findMin = (node: any) => {
    let cur = node;

    while (cur && cur.left !== null) {
      cur = cur.left;
    }

    return cur;
  };

  const fixDeletion = (node: any) => {
    if (node === null) return;
    let x = node;
    while (x !== root && x?.color === 'black') {
      if (x === x.parent.left) {
        let w = x.parent.right;
        // case 1 => w is red (w is sibling)
        if (w.color === 'red') {
          w.color = 'black';
          x.parent.color = 'red';
          rotateLeft(x.parent);
          w = x.parent.right;
        }
        // case 2 => w is black + w.left and w.right are black
        if (w.left.color === 'black' && w.right.color === 'right') {
          w.color = 'red';
          x = x.parent;
        } else {
          // case 3 => w is black + w.left is red and w.right is black
          if (w.right.color === 'black') {
            w.left.color = 'black';
            w.color = 'red';
            rotateRight(w);
            w = x.parent.right;
          }
          // case 4 => w is black + w.right is red
          w.color = x.parent.color;
          x.parent.color = 'black';
          w.right.color = 'black';
          rotateLeft(x.parent);
          x = root;
        }
      } else {
        // node === node.parent.right
        let w = x.parent.left;
        // case 1 => w is red (w is sibling)
        if (w.color === 'red') {
          w.color = 'black';
          x.parent.color = 'red';
          rotateRight(x.parent);
          w = x.parent.left;
        }
        // case 2 => w is black + w.left and w.right are black
        if (w.right.color === 'black' && w.left.color === 'right') {
          w.color = 'red';
          x = x.parent;
        } else {
          // case 3 => w is black + w.left is red and w.right is black
          if (w.left.color === 'black') {
            w.right.color = 'black';
            w.color = 'red';
            rotateLeft(w);
            w = x.parent.right;
          }
          // case 4 => w is black + w.right is red
          w.color = x.parent.color;
          x.parent.color = 'black';
          w.left.color = 'black';
          rotateRight(x.parent);
          x = root;
        }
      }
    }
    x.color = 'black';
  };

  const deleteNode = (id: number) => {
    const z = search(id);
    if (!z) return undefined;
    let y = z;
    let yOriginalColor = y.color;
    // determine case
    let x;
    if (z.left === null) {
      // case 1 => left child is null
      x = z.right;
      transplant(z, z.right);
    } else if (z.right === null) {
      // case 2 => right child is null
      x = z.left;
      transplant(z, z.left);
    } else {
      // case 3 => neither child is null

      y = findMin(z.right);

      yOriginalColor = y.color;
      x = y.right;
      if (y.parent === z) {
        x.parent = y;
      } else {
        transplant(y, y.right);
        y.right = z.right;
        y.right.parent = y;
      }
      transplant(z, y);
      y.left = z.left;
      y.left.parent = y;
      y.color = z.color;
    }
    if (yOriginalColor === 'black') fixDeletion(x);
  };
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
    deleteNode,
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
console.log(rbt.levelOrderTraversal());
rbt.deleteNode(15);
console.log(rbt.levelOrderTraversal());
