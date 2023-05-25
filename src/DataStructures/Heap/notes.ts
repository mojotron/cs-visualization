// array representation on binary heap
// node -> index i
// left child -> 2 * 1 + 1
// right child -> 2 * 1 + 2
// parent -> floor[(i - 1)/2]
//
// heap is complete binary tree
// two types of heap
// max heap - parent have grater value than all children -> root largest value
// min heap - parent have lesser value than all children -> root smallest value
// operations:
// - insert -> because is complete BT inset at next free space and bubble up
//   adjust elements compering with the parent -> swap elements -> O8log n)
//   height of tree worst, best O(1) swap 1 element
// - delete -> we can only delete root node (apple in the store analogy) ->
//   need to preserve property of complete BT, when we remove root element last
//   element (last leaf) takes root space -> readjust elements -> bubble down
//   root to leaf (in max heap swap with grater child, in min heap with lower
//   child) => max O(log n)
//
// heap sort => 2 steps (max heap)
// 1. for certain set of elements create a heap by inserting elements 1 by 1,
// 2. once heap is formed delete all the elements from the heap 1 by 1
// elements get sorted if we use space of element we delete after
// 50|30|20 => 30|20||50 => 20||30|50
// creation - n log n => for each n take log n
// deletion - n log n
// total time 2 n log n => O(n log n)
//
// heapify -> process  of creating a heap (direction is diff, inserting is upward)
// => downward => O(n) => faster then O(n log n)
//
// Priority queue => insert delete by priority
