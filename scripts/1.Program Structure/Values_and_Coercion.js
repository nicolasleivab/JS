/* Types of Values */

/* Types of values can be goruped by:
-Primitives: Number, string, boolean (true or false), null (empty value), undefined (empty value)
-Complex: Arrays, objects and functions

Other special values are Infinity, -Infinity and NaN (not a number)

Primitives can be accessed by their value while complex types can be accessed by reference (explained in the Objects chapter)
*/
/* Corecion */

let sum = 3 + 3*'2' + '11';

console.log(sum); // Before trying this in the console, guess the answer: a) 23, b) 20 , c) 911, d) 119 or e) 33211

//JavaScript will prioritize concatenation (+) when using a number and a string (converting number to string)
//In the case of a multiplication (*) JS will interprete it as a math operation in any case (converting string to number)


let sum2 = 2 + true; //true and false are coerced to 1 and 0 respectively
console.log (sum2);

let sum3 = 3 + undefined; //What will happen in this case?, what if you change the number type for a string in the two last sums ('2' and '3')
console.log(sum3);        //Try this with the null value as well



/* Default Values*/

function greet(name){
	console.log("Hello " + name);
}

greet(); //This will print undefined coerced to string "undefined"

//greet(0); What do you think will happen in this case?


/*Alternative

function greet(name){
	name = name || "<Your name here>"   //this way you set a default value
	console.log("Hello " + name);
}
*/
