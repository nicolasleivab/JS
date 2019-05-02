/* Rest Operator*/

function average(...sample) {
  let sum = 0;
  for(let i = 0; i < sample.length; i++){
    sum += sample[i];
  }
 return sum/sample.length;
}

console.log(average(2, 10, 24));

/*
Rest operator simply takes a set of values and pack them
in an array to pass it as a set arguments to the function
*/


/* Spread Operator*/

let sample2 = [2, 5, 10, 33];

//console.log(...sample2);
console.log(Math.max(...sample2));

/*
Spread is use to split up an array in to a list of values (the opposite)
*/

/*
Some useful resources:
https://codeburst.io/parameters-arguments-in-javascript-eb1d8bd0ef04
https://stackoverflow.com/questions/33898512/spread-syntax-vs-rest-parameter-in-es2015-es6
*/