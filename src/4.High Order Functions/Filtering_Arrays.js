/* High Order Functions */

/*
Higher-order functions are functions that operate on other functions by
taking them as arguments or returning them
More importantly, this kind of functions allow us to abstract over actions.
*/

let myArr = [0, 1, 3, 5];
let copiedArr = [];

myArr.forEach(n => copiedArr.push(n)); // for Each is a built in array method
console.log(copiedArr);                // for looping with a high order func


/* Filtering Arrays */


