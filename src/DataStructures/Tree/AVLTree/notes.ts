// bst - search time complexity O(h) => height can be min  log n max n
// don't insert duplicates in bts
// - for same input ids depending on order we get diff looking tree <= drawback of bst
// AVL Tree -> we want minimum hight bst
// rotations - 4 types
//     30     30     10     10    *pull string(* before **)
//     /*     /**   **\     *\   =>    20
//    20     10       30     20        /\
//   /      * \       /*       \     10  30
//  10        20     20        30
// rotations are done only on 3 nodes at time
// avl tree is hight balanced binary search tree
// we calculate balance factor = height of left subtree - height of right subtree
// - should be {-1, 0, 1} => if we get other then this node is imbalanced => rotate
// imbalances
// 1. LL (left of left) imbalance => LL rotation
// 2. LR => 2 step rotation (double rotation) LR rotation
// 3. RL => 2 step rotation (double rotation) RL rotation
// 4. RR => RR rotation
// Ave worst case balance -> when subtree hes heighr 1 more then other subbtree
// for every node
