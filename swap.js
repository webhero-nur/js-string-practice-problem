let first = 5;
let second = 9;
console.log(first, second);
/* Wrong Approach */
// first = second;
// second = first;

/* Approach: 1 (using a temporary variable) */
// const temp = first;
// first = second;
// second = temp;

/* Approach: 2 (Destructuring) */
// [first, second] = [second, first]

/* Approach: 3 (Math Operation, only works for numeric value) */
first = first + second;
second = first - second;
first = first - second;
console.log(first, second);