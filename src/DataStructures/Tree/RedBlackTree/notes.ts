// Red Black Tree
// balanced search trees
// guaranteed height of O(log n) for n items
// 1. a node is either red or black
// 2. the root and leaves(null) are black
// 3. if a node is red, then its children are black
// 4. all paths from a node to its null descendants contain the same number of
//    black  nodes
//
//            11B
//         /      \
//       2R        14B
//     /    \      /  \
//   1B      7B   B  15R
//   / \    /  \     / \
//  B   B  5R   8R  B  B
//        / \   / \
//       B   B B   B
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
// insert and remove may result in violation of red-black tree properties ->
// rotations to keep this property
// Rotations
// - alter the structure of a tree by rearranging subtrees
// - goal is to decrease the height of the tree
//   - red-black trees => maximum height of O(log n)
//   - larger subtrees up, smaller subtrees down
// - rotations do not affect the order of elements
// >> 2 types of rotations
// - rotate left
// - rotate right
