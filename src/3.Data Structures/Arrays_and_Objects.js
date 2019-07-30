/* Arrays */

/*
In JavaScript, an array is a data type for sorting sequences of values.
It's written as a list of values between square brackets and each value is separated by commas
*/

let myArray = [1, 2, 5]; // Array of numeric values 1, 2 and 5

console.log(myArray[0]); // The rray index is zero-based
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]); // What happens here?



/* Properties and methods */

console.log(myArray.length); // Print the length of the array (number of items)

myArray.push(5);            // Add values to the end of the array (you can pass more than one (5, 6 , 7))
console.log(myArray);

myArray.pop();              // Removes the last value of the array
console.log(myArray);

myArray.unshift('asd');    // Add values to he beggining of the array
console.log(myArray);

myArray.shift();          // Removes the first value of the array
console.log(myArray);



/* Objects */

/*
Roughly speaking, and object is a collection of pairs of properties and their values.
*/

let myPet = {         // Properties are separated by commas
    type: 'dog',
    name: 'Doge',
    age: 3,
    'likes to': 'bark' // Properties that aren't valid binding names or valid numbers have to be quoted
};

/* Methods */

console.log(myPet.type); // We can access a property value by using dot notation
console.log(myPet['likes to']); // Bracket notation is needed when the property name is not a valid binding name

delete myPet.age;       // delete is an unary operator that removes a property from an object
console.log(myPet.age);

console.log(age in myPet); // The binary operator 'in' tells you wether a property exist or not in an object
console.log(type in myPet); // this operator returns a boolean

console.log(Object.keys(myPet)); // Object.keys() returns an array of the properties names (strings)

Object.assign(myPet, {"doesn't like": "hugs"}); // Object.assign() copies the properties from one object to another one
console.log(myPet["doesn't like"]);



/*
Objects are a more complex type of data with interesting capabilities.
A more detailed description of objects and their properties is discussed in the Objects in Depth section of this repository.
*/
