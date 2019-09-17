/* Composed Operations */

/*
Following the previous example, we can solve the problem by using filter() and reduce()
*/

let data = [{x:1},{x:2},{x:4},{y:2},{y:3}];

console.log((arr.filter(n => n.x)).reduce((a, b) => ({x: a.x + b.x})));

let xSum = (arr.filter(n => n.x)).reduce((a, b) => ({x: a.x + b.x}));
let ySum = (arr.filter(n => n.y)).reduce((a, b) => ({y: a.y + b.y}));

console.log([xSum, ySum]);//array of objects (for each variable) with the solution


//What if we want a single object?

let result = data.reduce((a, b) => {    //loop through array elements and sum objects properties
  for (var prop in b) {
    if (a.hasOwnProperty(prop)) a[prop] += b[prop]; //condition to avoid getting NaN when a property doesn't exist
    else a[prop] = b[prop];
    }
    return a;
    }, {})

console.log(result); //single object with the solution


/*
Finally we can transform a reduced array with map() in order to get a specific format
*/

let transformed = result.map(n => ([{name: 'x', sum: n.x}, {name: 'y', sum: n.y}]));
console.log(transformed); //Why this doesn't work?


/*Try:

transformed = [result].map(n => ([{name: 'x', sum: n.x}, {name: 'y', sum: n.y}]));

console.log(transformed[0]);
*/