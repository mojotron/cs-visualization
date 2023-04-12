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
