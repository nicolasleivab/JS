/* Mutability */

/*
Unlike primitive values, objects properties can be changed (are mutable).
For objects, there is a difference between having a two references to a same object
and having two objects with the same properties
*/

let myObj1 = {prop: 1};

let myObj2 = myObj1;

let myObj3 = {prop: 1};

console.log(myObj1 == myObj2); 
console.log(myObj1 == myObj3); // What's happening here?

/*
In JavaScript, objects are compared by their identity (using == operator).
If you compare two different objects with the same properties it will return false.
There's no built in function in JavaScript to compare objects properties, but creating
one is possible.
*/


myObj1.prop = 2;   // Try to guess how the 3 objects will be affected before trying this in the console
myObj2.prop = 3;



/* const*/

const myPet = {         
    type: 'dog',
    name: 'Doge',
    age: 3,
    'likes to': 'bark' 
};

myPet.age = 4;
console.log(myPet);

/*
myPet = {           What will happen in this case?
    type: 'cat'
}

When creating a binding with const, he object itself can't be changed.
However, the values of that object might change.
*/

const ARR = [1, 3, 7];

//ARR = [3, 4, 6]; What do you think will happen? Why?
//ARR.push(11); and here?

console.log(ARR);

/*Defining variables with const allows us to block the value of the variable
so it can't be modified later */

/* In the second case we are not changing the constant's value, we are only changing the 
values which the constant is pointing to.
For a better understanding check Objects in Depth section, By Value vs By Reference
*/


