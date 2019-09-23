/* Methods */

/*
Methods are properties that hold function as values object.method().
When a function is called as a method, the binding 'this' automatically points (reference)
at the object that it was called on.
*/

function objectDescriptor(n){
    let properties = Object.keys(this); //'this' is an extra parameter that points at the current object
    console.log(`This object has ${properties.length} properties and its property number ${n} is called ${properties[n-1]}`);
}

let obj1 = {first: 12, second: 24, third: 76, objectDescriptor};
let obj2 = {first: 11, second: 18, third: 32, fourth: 102, fifth: 111, objectDescriptor};

obj1.objectDescriptor(1);

/*
It is possible to pass the 'this' parameter explicitly by using the call() method
*/

objectDescriptor.call(obj1, 2);

/*
By default, the first argument is taken as 'this' and the rest as the normal arguments
*/


/* Arrow functions and 'this' */


/*
Arrow functions do not bind their own 'this' but the one binding of the scope around them
*/

function normalize(){
    console.log(this.sample.map(n => (n - Math.min(...this.sample)) / (Math.max(...this.sample) - Math.min(...this.sample))));
}
  
  
normalize.call({sample: [1, 2, 3, 5, 7, 10]}); //it references 'this' from inside a local function

/*
Try normalize.call() by changing the arrow function with the keyword function and check what happens
*/