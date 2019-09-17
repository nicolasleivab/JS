/* reduce() */

/*
Summarizing with reduce()
This higher-order function builds a value (single) by taking every element of the array and combining it
with the current value. The parameters to reduce() are: array, a combining function and a starting value
(which is by default the first element)
*/

let myArray = [1, 2, 5, 11]; //Reducing an array of numbers

let reducedArray = myArray.reduce((a, b) => a + b);
console.log(reducedArray); //single value


let values = [{value: 1}, {value: 3}, {value: 7}]; //Reducing an array of objects

let reducedValue = values.reduce((a, b) => ({value: a.value + b.value}));
console.log(reducedValue); //single object



/*
Reducing an array of objects with different properties
*/

let data = [{x: 3}, {x: 5}, {x: 11}, {y: 2}, {y: 7}];

let reducedData = data.reduce((a, b) => ({x: a.x + b.x, y: a.y + b.y}));
console.log(reducedData); //What's happening here?

//data = [{x: 3, y: 1}, {x: 5, y: 2}, {x: 11}];
//console.log(reducedData); //and here?

/* undefined + Number = NaN */

//Try different types of data and return values for a better understanding of reduce()

//Different solutions for this case are shown in the next script