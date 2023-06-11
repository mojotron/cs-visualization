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
                console.log('left heavy');
                var uncle = grandparent.right;
                if ((uncle === null || uncle === void 0 ? void 0 : uncle.color) === 'red') {
                    console.log('left heavy uncle red');
                    parent_1.color = 'black';
                    uncle.color = 'black';
                    grandparent.color = 'red';
                    pointer = grandparent;
                }
                else {
                    console.log('left heavy uncle black');
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
                console.log('right heavy');
                var uncle = grandparent === null || grandparent === void 0 ? void 0 : grandparent.left;
                if ((uncle === null || uncle === void 0 ? void 0 : uncle.color) === 'red') {
                    console.log('right heavy uncle red');
                    parent_1.color = 'black';
                    uncle.color = 'black';
                    grandparent.color = 'red';
                    pointer = grandparent;
                }
                else {
                    console.log('right heavy uncle black');
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
        root.color = 'black';
    };
    return {
        get root() {
            return root;
        },
        insertNode: insertNode,
    };
};
var rbt = RBTree();
rbt.insertNode(5);
rbt.insertNode(4);
rbt.insertNode(3);
rbt.insertNode(2);
rbt.insertNode(1);
console.log(rbt.root);
