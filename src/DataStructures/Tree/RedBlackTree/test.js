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
        console.log('r l');
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
var x = rbt.levelOrderTraversal();
console.log(x);
