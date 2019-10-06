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



/* Common mistake */

/*
We can add as many .then() as we want to a single promise (promise.then()). But this is not chaining.
*/

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(3), 1000);
});

promise.then(function(result) { //we are reusing the same promise without chaining (returning the same value)
  alert(result); // 3
  return result * 3;
});

promise.then(function(result) {
  alert(result); // 3
  return result * 3;
});

promise.then(function(result) {
  alert(result); // 3
  return result * 3;
});



/* Promise.all */

/*
all() method returns a single Promise that resolves when a list of different promises have either resolved 
or contains no promises at all. It rejects with the reason of the first rejected promise.
*/

//create 2 different promises with this binding names and try this

//let promise1 = new Promise(....)

Promise.all([promise1, promise2]).then(function(values) { 
  console.log(values);
});