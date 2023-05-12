// Good code
// - readable
// - scalable (Big O)
// -- speed
// -- memory
// measure runtime with performance.now() => milliseconds
// Big O notation is the language we use for talking about how long algorithm
// takes to run. We can compare it to diff algos or functions using big O and
// say which one is better then thr other when it comes to scale (regardless
// of our computer differences).
// Example: as elements in array increases => how many more operations do we
// have to do. <= algorithmic efficiency.
// Big O allows us to explain this concept, when we grow bigger and bigger with
// our input, how much does the algo slow down. The less slow down(slower slows
// down) the better it is.
//
// > O(n)
// Linear (time) rate as our number of input increases, the number of operations
// increases as well.
// n means the big O depends on the number of inputs
// [1,2,3,4] => O(4)
// Big O doesn't measure things in seconds => instead we're focusing on how
// quickly our runtime grows => doing this by using the size of the input, which
// we call n and compare it to the number of operations that increase.
//
// > O(1) - constant time
// const printFirstEle = (arr) => console.log(arr[0]);
// no matter how many times the input increases we are always grabbing first item
// number of operations is 1
// function getFirst2Elements() {
//  console.log(arr[0]) => O(1)
//  console.log(arr[1]) => O(1)
// } => O(2) again its constant time in terms of scalability

// function funChallenge(input) {
//   let a = 10; => O(1)
//   a = 50 + 3; => O(1)

//   for (let i = 0; i < input.length; i++) {
//     anotherFunction(); => O(n)
//     let stranger = true; => O(n)
//     a++; => O(n)
//   }
//   return a; O(1)
// } => BIG O(3 + 3n) => O(n)

// function anotherFunChallenge(input) {
//   let a = 5; => O(1)
//   let b = 10; => O(1)
//   let c = 50; => O(1)
//   for (let i = 0; i < input; i++) {
//     let x = i + 1; => O(n)
//     let y = i + 2; => O(n)
//     let z = i + 3; => O(n)

//   }
//   for (let j = 0; j < input; j++) {
//     let p = j * 2; => O(n)
//     let q = j * 2; => O(n)
//   }
//   let whoAmI = "I don't know"; => O(1)
// } => BIG O(3 + 5n) => O(n)

// Big O calculation Rules (only scalability matters)
// 1. Worst Case - we can't assume things are going well
// 2. Remove Constants - O(2+3n) => O(n) => graf is linear steeper, but still linear
// 3. Different terms for inputs
// function temp(a, b) {
//  a.forEach(x => ...)
//  b.forEach(x => ...)
// } => O(a + b) => different input
// Note! if this loops were nested they are O(a * b)
// 4. Drop non dominants => O(n + n^2) => O(n^2)

// > O(n^2) => nested loops => quadratic time
// function logPairs(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = i; j < arr.length; j += 1) {
//       console.log((arr[i], arr[j]));
//     }
//   }
// } => O(n * n) => O(n^2)
// note 3 nested loops (same input) => O(n^3) cubic...but if you gor 3 or more your code is BAD
//
// data structures + algorithms = programs
// Big O is important => we want to write code that can scale so that we don't
// have ro constantly go back and fix it
//
// O(n!) - factorial time => adding nested loop for every input that we have
// most expensive one
//
// 3 Pillars of Programming
// 1. readable - clean code that others can read, that is maintainable
// 2. speed - time complexity, Big O => efficient code, scales well
// 3. memory - memory usage of code => we use Big O to talk about space complexity
//    The same notation but diff topic, speed and memory.
// Most programming code solutions, there's usually trade off between speed and
// memory. TO go faster you need to sacrifice more memory, and vice versa.
//
// Space complexity
// - when program executes, it has two ways to remember things.
// 1. Heap - where we store variables that we assign values to
// 2. Stack - where we keep track of our function calls.
// What causes Space Complexity => variables, DS, function calls, allocations
//
// What are companies looking for?
// 1. Analytic skills - how can you think through a problem and analyze things.
// Your though process and how you go from not knowing the answer to solving
// the problem.
// 2. Coding skills - clean, organized, readable
// 3. Technical skills - fundamentals, how you understand pros and cons
// 4. Communication skills
//
// For interviews
// DS => array,stacks,queues,LL,trees,tries,graphs,Hash tables
// algos => sorting, dynamic programming, BFS + DFS searching, recursion
//
// DS => collection of values, values can have relationships among them, and
// they can have functions apply to them. Each one is diff in what it can do
// and what it is best used for. Way to organize data.
// Algos => steps or processes we put into place to manipulate these collection
// of values.
// DS + Algos = Programs
// 2 parts to understand DS
// - how to build one (mostly they are prebuild into language)
// - how to use it
// in order for computer to run code, it needs to keep track of things =>
// variables(numbers, strings arrays). These variables are stored in what we
// call random access memory (RAM). Storage for files and documents can be
// hard disk, flash drive. Data on storage is permanent (persistent).
// Persistent storage is slow. CPU does all calculations, needs access to RAM and
// storage, access to RAM is lot faster
// Operations on DS
// - insertion - add new data item in a given collection
// - deletion - remove data item
// - traversal - access each data item exactly once that it can be processed
// - searching - find location of data item if it exist in a given collection
// - sorting -
// - access - how do we access data item that we have on our computer
//
// Arrays (lists) - organizes items sequentially, one after another in memory.
// Because they are stored in contiguous memory (order), they have smallest
// footprint on any data structure. If all you need is to store some data and
// iterate over it (one by one) => arrays are best choice, especially if you
// know the indices of the items you storing.
// - lookup O(1)
// - push O(1)
// - insert O(n)
// - delete O(n)
// Static vs Dynamic Array
// => static arrays are fixed in size, you specify the number of elements your
// array will hold ahead of time. Dynamic arrays allow us to copy and rebuild
// an array at new location with more memory (expands in memory as you keep items).
// Lower level languages like C++ allow better control over memory, we can tweak code
// to run faster
// dynamic arr
// - lookup O(1)
// - append O(1) => can be O(n)
// - insert O(n)
// - delete O(n)
// Arrays pros
// - fast lookups
// - fast push/pop
// - ordered
// Array cons
// - slow inserts
// - slow deletes
// - fixed size (if using static array)
//
// Hash Tables (hash/maps/unordered maps/dictionaries/objects)
// JS => objects, Python => dictionary, Java => maps, Ruby => hashes
// hashes are used a lot in DBs and caches
// hash tables => key/value pair (stores key and value in memory)
// - key => used as index of where to find the value in memory
// - value
// Hash function => function that generates a value of fixed length for each
// input that is gets
// key => send through a hash function => hash something really really fast =>
// map whatever the hash came out to be into a memory address => store it
// (obj.apples => 23fjfjdw00ww0 => 23fjfjdw00ww0 = 3) Big O(1)
// - insert O(1)
// - lookup O(1)
// - delete O(1)
// - search O(1)
// Hash Collisions => hash function randomly assigns a space and memory and
// put it there. Nothing is telling hash function to evenly distribute until
// everything is full.
// collision example:
// ----------------------------------------------------------------
// keys   address   bucket          overflow entries
// apple     015   apple|124-689 => banana|124-733 <- linked list
// banana    015
// ----------------------------------------------------------------
// we can't avoid these collisions, with enough data and limited memory
// there is possibility to constantly add items to same memory space, theoretically
// when there is collision it slows down reading and writing with a hash table
// to O(n/k) => k is size of has table => removing constant => O(n)
// dealing with collisions => Linked List DS (separate chaining)
// there are many more solutions.
// Pros (need good collision resolutions)
// - fast lookups
// - fast inserts
// - flexible keys
// Cons
// - unordered
// - slow key iterations
//
// LinkedList
// with static array we only have certain amount of memory that we can allocate.
// Both dynamic and static arrays can increases memory once it hits a certain
// limit and double up that memory in another location => performance implication
// O(n). Arrays have bad performance for any sort of operations like insert and
// delete that have to shift indexes over.
// Hash tables => store things for us and know where to place it in memory. But
// they are not ordered.
// LL => ['a', 1] -> ['b', 2] -> ['c', 3] -> null
//         ^^ head                ^^ tail
// LL contains set of nodes(blocks). Node have 2 elements the value of the data
// you want to store, and a pointer to the next node in line. They are null
// terminated => signifies that it's the ned of list
// Main diff between arrays and LL is that in an array, an element or elements
// are indexed, in a LL you start at the hea and traverse the list until you get
// to item => O(n). Traversal is like array iteration but you don't really know
// when the length list will end => start from the head until you hit null.
// Another advantage of array => most computers have caching system that makes
// reading from sequential memory (shelves right next of each other), faster
// then reading scattered addresses. Array items are always next to each other
// in computer memory.
// Inserts that we can do in the middle of a LL are a lot better then an array,
// no shifting/unshifting items.
// In difference to HT in LL there is some order => each node points to the next
// node so you can have sorted data unlike a hash table.
// Operations
// - prepend O(1)
// - append O(1)
// - lookup O(n)
// - insert O(n)
// - delete O(n)
// Pointer => reference to another place in memory or another object or another
// node.
// Js => garbage collected => memory is cleaned automatically, in low level langs
// you have to manually delete/clean unreferenced item in memory.
// Doubly Linked List => links to the node before it
//          head              tail
//         [ a  ]   [ b  ]   [ c  ]
//         [next] > [next] > [next] > null
//  null < [prev] < [prev] < [prev]
// Single vs Double
// single require less memory (little bit faster), but cannot be iterated in reverse
// use sll when you have less memory or memory is really expensive, main goal is
// to do fast insertion and deletions without much searching
// use dll when you don't have much limitation on memory and when you want
// good operation for searching (forward or backwards)
// Prose                 Cones
// - fast insertion    - slow lookup
// - fast deletion     - more memory
// - ordered
// - flexible size
//
// Stack & Queues
// - linear data structure => allow us to traverse, but only one data element
// can be directly reached. Implemented in similar ways, main diff is only how
// items get removed from this data structure. Unlike an array there's no random
// access operation. They deal with element at beginning of data structure push,
// pop, peek. In cs having limited ability on ds is advantage => control them.
//
// > Stacks (LIFO)
// - programming languages engine modeled with the stack architecture (function
//  calls), browser history, undo state.
// Operations
// - lookup O(n) -> this operation is not used!
// - pop O(1)
// - push O(1)
// - peek/top O(1)
// Can be implemented using arr or LL => both going to work fairly well. Arr
// allows cache locality => makes them technically faster when accessing its items in
// memory because they are right next to each other, versus LL that has them
// scattered all over memory. LL use more memory for pointers, but static or
// dynamic array has certain amount of memory and as soon it it's about to reach
// its limit, it's going to have to double up that memory and create new space
//
// > Queues (FIFO)
// - wait list app (tickets, uber), printer
// Operations
// - lookup O(n) -> this operation is not used!
// - enqueue O(1)
// - dequeue O(1)
// - peek/top O(1)
// creating queue from array (is really bad) => on enqueue we need shift rest
// of array
//
// Trees
// - hierarchical DS, tree usually starts whit a single root node (parent node),
// and every child of the tree descends from this root node. Every child of node
// descends from only one parent. Leaf very end of tree ds.
// Examples => DOM, facebook users
// Abstract syntax tree => how programs run code, code is broken down by the
// machine into AST
// LL is type of tree => linear, going one way from top to bottom. Diff node
// can only point to a child.
//
// Binary Trees
// - each node can only have 0,1 or 2 child nodes, child node can have only one
// parent node.
// Perfect BT all leaf nodes are full, there is no node that only has 1 child.
// - node either has zero children or two children and the bottom layer of the
//   tree is completely filled.
// - this type of tree is really efficient and desirable, when they are perfect
//   they have properties => 1.number of total nodes doubles as we move down the
//   tree, 2. number of nodes on the last level is equal to the sum of the number
//   of nodes on all the other levels + 1
// => we have half of the data in the bottom level, if we avoid visiting every
//    node (even if the node we are looking for is the very bottom)
// => Operations => lookup / insert / delete <= O(log N)
//
// O(log N)
// - simply means that based on the height, the maximum number of decisions (
// looking for node) is going to to be log n => if current node is not value we
// looking for we can go either left or right => we have maximum tree height steps
//
// Binary Search Tree -> subset of binary tree
// great for comparing things, this DS preserve relationships (unlike hash tables)
// Rules
// 1. all child trees to the right of root node must be greater then current node
// 2. node can only have up to two children
// Balance BST => Operations => lookup / insert / delete <= O(log N)
// Unbalanced BST => Operations => lookup / insert / delete <= O(N)
// -> need optimization algo because can easily turn to LL if we for example add
// sorted data [1,2,3,4] => balanced BST with AVL and Red/Black tree
// BST pros => better than O(n), ordered and flexible size(memory)
// BST cons => no O(1) operations
//
// Balance tree => AVL and Red Black Trees
// automatically re balances itself so that we don't have edge cases where our
// unbalanced tree turns into linear, unbalanced tree
//
// Heaps => Binary Heap (2 nodes)
// every child belongs to parent node that has a greater priority or value
// max heep => root node highest, min heap => root node smallest
// can be used in any algo where is ordering important
// commonly used in priority queues

// Priority Queues
// type of DS where each element has priority => elements with higher priority
// are served before elements with lower

// Trie
// is specialized tree used in searching, in most cases it can outperformed
// BST, HT and most other DS.

// Graph
// one of the most useful and most used DS in CS when it comes to modeling real
// life. Graph is set of values that are related in pairwise fashion. Look like
// a network. Each item is called node or vertex, nodes then are connected with
// edges. Ideal for cases when there is need to connect things to other things
// (network, roads, social, recommendation engines).
// Types of graphs
// 1. directer - useful for describing traffic flow, system in which movement is
// not bi directional, from some nodes we can only go in one direction
// 2. undirected graphs - bi directional, we can move back and forth between 2
// nodes
// => nodes can carry any type of information, but with graphs you can have
// information in the edges
// 3. unweighted -
// 4. weighted - calculating shortest or optimal path
// 5. cyclic - vertices connected in a circular fashion
// 6. acyclic
// Methods to represent graphs
// Edge List
// Adjacent List
// Adjacent matrix

// Section 2 Algorithms
// algorithms are steps ina process that we take to preform a desired action
// with computers. Allow us to use language built in DS to preform actions on
// that data. Certain algos allow us to simplify our big O complexity into
// smaller or better time complexity.
//
// > Recursion Concept
// - recursive function is a function that refers to itself
// - really good for tasks that have repeated subtasks to do
// - concept used in searching and sorting algos (traversing a tree)
// -> stack overflow - occurs when there is no base case in recursion
// function stackOverflow() {
//  debugger; => stops execution in browser debug mode and you can inspect call stack
//  stackOverflow()
// }
// potential problem with recursion => computer needs to allocate memory to
// remember things
// every recursion function must have a base case => stop calling function
// and recursive case => call function again and run it
// Note: anything done with recursion can be done iteratively! Good programmer
// should look pros and cons for each solution. Recursive approach is sometimes
// much easier to write. Recursive algos are DRY much more readable, but use
// more memory (large stack).
// => Tail Call Optimization => allows recursion to be called without increasing
// the call stack (ES6)
// Use recursion for traversing or searching trees and graphs BFS and DFS.
// Every time you are using tree or converting something into tree => recursion.
// Divide and Conquer => recursion
// - divide into a number of subproblem that are smaller instances of the same problem
// - each instance of the subproblem is identical in nature
// - the solution of each subproblem can be combined to solve the problem at hand
//
// Sorting
// - not a big deal with small input data. Crucial for large sets of data.
// Sorting and searching are two of the biggest cs problems in the software world.
// Bubble, selection, insertion => O(n^2)
// insertion is fastest for nearly sorted data
// > O(n log n)
// merge and quick sort => divide and conquer technique with recursion space O(n)
//                  /65318724\
//                 /6531  8724\
//               /65 31    87 24\
//             |6 5 3 1    8 7 2 4|
//               \56 13    78 24/
//                 \1356  2478/
//                  \12345678/
// log n => kind height of tree
// A sorting algorithm is said to be stable if two objects with equal keys
// appear in the same order in sorted output as they appear in the input array
// to be sorted. Some sorting algorithms are stable by nature like Insertion
// sort, Merge Sort, Bubble Sort, etc. And some sorting algorithms are not,
// like Heap Sort, Quick Sort, etc.
// Now to answer your question, suppose we have a list of first and last names.
// We are asked to sort "by last name, then by first". We could first sort
// (stable or unstable) by the first name, then stable sort by the last name.
// After these sorts, the list is primarily sorted by the last name. However,
// where last names are the same, the first names are sorted.
// Picking sorting algo:
// - insertion -> small data set or items are mostly sorted
// - bubble and selection -> never, used for educational purpose
// - merge -> if you worried about worst case scenarios, but memory expensive
// - quick -> better then merge sort on average time and space complexity, if
// we don't pick the pivot properly we have O(n^2) sorting
// - heap - O(1) space complexity => use it when you arw worried with worst
// case time and space
//
// Comparison Sort (need to compare every element to each other)
// bubble, insertion, selection, merge, quick
//
// Non-Comparison Sort
// counting, radix
// - different way to think about sorting. With comparison sort, we decided the
// order of the elements based on asking the question => is element a bigger
// element b = keep doing that until compare all elements.
// Non comparison sorting => elements are stored on computers in zeros and ones
// and take advantage of that => only works with numbers - integers in restricted
// range
// comparison sorting is universal
//
// Searching
// > Linear search - method of finding a target value within a list. Sequentially
// checks each element of the list for the target value until match is found or
// until all the elements have been searched. Best case O(1) first item, worst
// case O(n) last item.
// > Binary Search (for SORTED list) - saving items in tree structure gives
// better search performance => every step we discard half of the items going
// left or right => O(log n)
// > Graph + Tree Traversal
// - Breadth First Search and Depth First Search => O(n)
// - when traversing through a tree or a graph we are trying to do is walk through
// without ever repeating ourselves -> order ot the thing matters when it comes
// to DFS and DFS
// BFS pros => shortest path, closer nodes => cons more memory
// DFS pros => less memory, does path exists => cons can get slow
// DFS can be implemented 3 ways => inorder, preorder, postorder Space => O(h) height of tree
//    8       inorder: 3,8,10 => for sorting
//   / \     preorder: 8,3,10 => for recreating tree
//  3  10   postorder: 3,10,8
// Shortest path in weighted graph
// Dijkstra algorithm => more efficient
// Bellman-Ford algorithm => negative weights O(n^2)
//
// Dynamic Programming
// - optimization technique => Do you have something you can cache?
// - at the high level => way to solve problems by breaking it down into a
//   collection of sub problems => solving each of those problems just once,
//   and storing their solutions in case next time the same sub problem occurs
// - caching is a way to store values so you can use them later on (backpack),
//   way for us to speed up programs and hold some piece of data in an easily
//   accessible box.
// - memoization - specific form of caching that involves caching the return
//   value based on the parameters. Simply a way to remember a solution to a
//   problem, so you don't have to calculate it again.
// - dynamic programming => divide & conquer + memoization
//   * can be divided into sub problems
//   * recursive problem
//   * are there repetitive sub problems
//   * memoize sub problems
//   * demand a raise from your boss
//
// example:
// const addTo10 = () => {
//   const cache: { [key: number]: number } = {};

//   return (n: number) => {
//     if (cache[n]) return cache[n];

//     console.log('Caching....');
//     cache[n] = 10 + n;
//     console.log('Caching done!');
//     return cache[n];
//   };
// };

// const memoized = addTo10();
// console.log(memoized(5));
// console.log(memoized(5));
