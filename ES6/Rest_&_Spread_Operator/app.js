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

