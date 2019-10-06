/* Promise Chaining */

/*
Because .then() method always returns a new promise, it’s possible to chain promises, so that we can call the 
next .then on it.
When a handler returns a value, it becomes the result of that promise, so the next .then is called with it.
*/

let value; //create global variable

new Promise(function(resolve, reject) {

    setTimeout(() => resolve('3'), 1000); //resolved in 1000 milliseconds
    
  }).then(function(result) { 
    
    alert(result); // 3
    return result * 3;       //result is passed through the chain of .then handlers
  
  }).then(function(result) { 
  
    alert(result); // 9
    return result * 3;
  
  }).then(function(result) {

    alert(result); // 27
    return result, value = result; //pass result to global variable  

  });

setTimeout(() => console.log(value), 1500); //check variable (27) or type it in the console after the promise

