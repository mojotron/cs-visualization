var RBNode = function (id) {
    return {
        id: id,
        left: null,
        right: null,
        parent: null,
        color: 'red',
    };
};
var RBTree = function () {
    var root = null;
    var rotateLeft = function (node) {
        var temp = node.right;
        node.right = temp.left;
        if (temp.left !== null)
            temp.left.parent = node;
        temp.parent = node.parent;
        if (node.parent === null) {
            root = temp;
        }
        else if (node === node.parent.left) {
            node.parent.left = temp;
        }
        else {
            node.parent.right = temp;
        }
        temp.left = node;
        node.parent = temp;
    };
    var rotateRight = function (node) {
        var temp = node.left;
        node.left = temp.right;
        if (temp.right !== null)
            temp.right.parent = node;
        temp.parent = node.parent;
        if (node.parent === null) {
            root = temp;
        }
        else if (node === node.parent.right) {
            node.parent.right = temp;
        }
        else {
            node.parent.left = temp;
        }
        temp.right = node;
        node.parent = temp;
    };
    var fixInsertion = function (node) {
        var pointer = node;
        while (pointer.parent && pointer.parent.color === 'red') {
            var parent_1 = pointer.parent;
            var grandparent = parent_1.parent;
            if (parent_1 === (grandparent === null || grandparent === void 0 ? void 0 : grandparent.left)) {
                var uncle = grandparent.right;
                if ((uncle === null || uncle === void 0 ? void 0 : uncle.color) === 'red') {
                    parent_1.color = 'black';
                    uncle.color = 'black';
                    grandparent.color = 'red';
                    pointer = grandparent;
                }
                else {
                    if (pointer === parent_1.right) {
                        pointer = parent_1;
                        rotateLeft(pointer);
                    }
                    parent_1.color = 'black';
                    grandparent.color = 'red';
                    rotateRight(grandparent);
                }
            }
            else {
                var uncle = grandparent === null || grandparent === void 0 ? void 0 : grandparent.left;
                if ((uncle === null || uncle === void 0 ? void 0 : uncle.color) === 'red') {
                    parent_1.color = 'black';
                    uncle.color = 'black';
                    grandparent.color = 'red';
                    pointer = grandparent;
                }
                else {
                    if (pointer === parent_1.left) {
                        pointer = parent_1;
                        rotateRight(pointer);
                    }
                    parent_1.color = 'black';
                    grandparent.color = 'red';
                    rotateLeft(grandparent);
                }
                if (pointer === root)
                    break;
            }
        }
        root.color = 'black';
    };
    var insertNode = function (id) {
        var parent = null;
        var pointer = root;
        while (pointer !== null) {
            parent = pointer;
            if (id < pointer.id) {
                pointer = pointer.left;
            }
            else {
                pointer = pointer.right;
            }
        }
        var newNode = RBNode(id);
        newNode.parent = parent;
        if (parent === null) {
            root = newNode;
        }
        else if (newNode.id < parent.id) {
            parent.left = newNode;
        }
        else {
            parent.right = newNode;
        }
        fixInsertion(newNode);
    };
    var print = function () {
        var inOrder = function (node) {
            if (node !== null) {
                inOrder(node.left);
                console.log(node.id);
                inOrder(node.right);
            }
        };
        inOrder(root);
    };
    // DELETION
    var search = function (id, rootNode) {
        if (rootNode === void 0) { rootNode = root; }
        if (rootNode === null)
            return undefined;
        if (rootNode.id === id)
            return rootNode;
        if (id < rootNode.id)
            return search(id, rootNode.left);
        if (id > rootNode.id)
            return search(id, rootNode.right);
    };
    // transplant
    var transplant = function (u, v) {
        if (u.parent === null)
            root = v;
        else if (u === u.parent.left)
            u.parent.left = v;
        else
            u.parent.right = v;
        if (v)
            v.parent = u.parent;
    };
    var findMin = function (node) {
        var cur = node;
        while (cur && cur.left !== null) {
            cur = cur.left;
        }
        return cur;
    };
    var getNextMinimum = function (node) {
        var rightChildExists = node.right !== null;
        if (rightChildExists)
            return findMin(node.right);
        var cur = node;
        var parent = node.parent;
        // Go up the tree from cur until we find a node that is the left child of the parent.
        // If the node is the right child of the parent that means we haven't crossed
        // "up and over" to the successor side of the binary tree
        while (parent !== null && cur === parent.right) {
            cur = parent;
            parent = parent.parent;
        }
        return parent;
    };
    var fixDeletion = function (node) {
        if (node === null)
            return;
        var x = node;
        while (x !== root && (x === null || x === void 0 ? void 0 : x.color) === 'black') {
            if (x === x.parent.left) {
                var w = x.parent.right;
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
                }
                else {
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
            }
            else {
                // node === node.parent.right
                var w = x.parent.left;
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
                }
                else {
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
    var deleteNode = function (id) {
        var z = search(id);
        if (!z)
            return undefined;
        var y = z;
        var yOriginalColor = y.color;
        // determine case
        var x;
        if (z.left === null) {
            // case 1 => left child is null
            x = z.right;
            transplant(z, z.right);
        }
        else if (z.right === null) {
            // case 2 => right child is null
            x = z.left;
            transplant(z, z.left);
        }
        else {
            // case 3 => neither child is null
            console.log('yyyyyy');
            console.log(z);
            y = findMin(z.right);
            yOriginalColor = y.color;
            x = y.right;
            if (y.parent === z) {
                x.parent = y;
            }
            else {
                transplant(y, y.right);
                y.right = z.right;
                y.right.parent = y;
            }
            transplant(z, y);
            y.left = z.left;
            y.left.parent = y;
            y.color = z.color;
        }
        if (yOriginalColor === 'black')
            fixDeletion(x);
    };
    //
    var levelOrderTraversal = function () {
        var temp = [];
        var queue = [];
        if (root)
            queue.push(root);
        while (queue.length) {
            var subTemp = [];
            var len = queue.length;
            for (var i = 0; i < len; i += 1) {
                var node = queue.shift();
                subTemp.push("".concat(node.id, "-").concat(node.color));
                if (node.left)
                    queue.push(node.left);
                if (node.right)
                    queue.push(node.right);
            }
            temp.push(subTemp);
        }
        return temp;
    };
    return {
        get root() {
            return root;
        },
        insertNode: insertNode,
        print: print,
        levelOrderTraversal: levelOrderTraversal,
        deleteNode: deleteNode,
    };
};
var rbt = RBTree();
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
