// Red Black Tree
// -type of self balancing search tree, with strict set of rules in order to
// maintain a logarithmic time complexity
// - guaranteed height of O(log n) for n items
// Red Black Rules:
// 1. a node is either red or black
// 2. the root and leaves(null) are black
// 3. if a node is red, then its children and parent are black
// 4. all paths from a node to its null descendants contain the same number of
//    black  nodes
//                                    legends:
//       (2)    <- passes or 4        () <- black
//      /   \      rules              [] <- red
//    (1)   (3)                       x  <- leaf node, null, considered black
//    / \   / \
//   x   x x   x
//
//       (2)    <- passes or 4        () <- black
//      /   \      rules              [] <- red
//    [1]   [3]                       x  <- null
//    / \   / \
//   x   x x   x
//
// rules violations
//   (1)        (1)       (1)        (1)
//   / \        / \       / \        / \
//  x   [2]    x   (2)   x   [2]    x   (2)
//      / \        / \       / \        / \
//     x   [3]    x   [3]   x  (3)    x   (3)
//                                         / \
//    rule 3X    rule 4X   rule 4X        x   x  rule 4X
// * general rule-chain of three nodes is not possible in RBT
//
// - nodes require one storage bit to keep track of color
// - the longest path (root to farthest null) is no more then twice the length
//   of the shortest path (root to nearest null)
//   -> shortest path => all black nodes
//   -> longest path => alternating red and black
// operations
// - search => O(log n)
// - insert => O(log n)
// - remove => O(log n)
// space complexity => O(n) we require 1 extra storage
//
// Insertion
// - inserting a node and immediately coloring it red
// - recoloring
// - rotations
// Strategy
//            (B) <- grandparent
//            / \
//  uncle-> (D) [A] <-parent
//              /
//            [Z] <- new node
// 1. insert Z and color it red
// 2. recolor and rotate nodes to fix violation
//   - case 1. Z === root => color Z black
//      [Z] => (Z)
//   - case 2. Z.uncle === red => recolor parent, grandparent and uncle
//      (B)            [B] <- subtree (root must be black)
//      / \            / \
//    [A] [C]  ===>  (A) (C)
//      \              \
//      [Z]            [Z]
//   - case 3. Z.uncle === black (triangle) => rotate parent opposite of new node
//      (B) \\            [B]                  child take place of parent
//      / \  \\           / \
//    (C) [A] \\ ===>   (A) [Z]
//        /   //              \
//      [Z]  //               [A]
//   - case 4. Z.uncle === black (line) => rotate Z grandparent opposite of Z
//      (B) \\            (A)             and recolor parent and grand parent
//      / \  \\           / \
//    (C) [A] \\===>    [B] [Z]
//        / \  \\       / \
//      (D) [Z] \\    (C) (D)
//
// insert and remove may result in violation of red-black tree properties ->
// rotations to keep this property
//
// Rotations
// - alter the structure of a tree by rearranging subtrees
// - goal is to decrease the height of the tree
//   - red-black trees => maximum height of O(log n)
//   - larger subtrees up, smaller subtrees down
// - rotations do not affect the order of elements
// >> 2 types of rotations
// > rotate left
// > rotate right
