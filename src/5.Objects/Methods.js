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
