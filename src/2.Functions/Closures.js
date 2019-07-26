/* Understanding Closures*/

function buildFunctions() {

	var arr = [];

	for (var i = 0; i < 3; i++) {

		arr.push(
			function() {
			
					console.log(i);	
			}

		)
	}

	return arr;
}

var fs = buildFunctions();

fs[0]();    //Which values are you expecting and why?
fs[1]();
fs[2]();

/*
A quick fix for this is using let (ES6) instead of var in the for loop to store
the different values.
In ES5 you can implement an IIFE in order to create 3 different execution contexts to
store the different values that are created on the fly, then the function will
reach out each of this values like this:

		arr.push(
			(function(j) {
				return function() { 
					console.log(j);
				}
			}(i))

This is possible because of closures in JS
*/


/* Closures and Callbacks*/

function timer() {

	var message = '3 seconds have passed!'

	setTimeout(function(){

			alert(message);

    }, 3000);
}

timer();

/*
Callback function: A function you give to another function,
to be run when the other function is finished.

In this case, the function goes up the scope chain and access the variable 
message that's still available 3 seconds later because of closure.



// For more info check https://stackoverflow.com/questions/2070275/what-are-closures-and-callbacks


/* Let, Block Scope and Closures */

let/*var*/ value = 1;

if (true) {
	let/*var*/ value = 2;   //Try changing let for var in different combinations
	console.log(value);     // and check the results in the console
}

console.log(value)

/* The use of 'let' allows us to use block scoping, meaning that contains
the variable in the body where it's defined */

// This is specially useful when using functions within for loops

for (let/*var*/ i = 0; i < 5; ++i) { //What do you think would happen if you use
                                     //'var' instead of 'let'
  setTimeout(function() {
    
    console.log("i = " + i);
  
  }, i * 50);

}

/* A new i is created for each iteration of the loop, so that closures created 
within the loop close over the i for *that* iteration.
*/

// https://stackoverflow.com/questions/40449494/why-is-using-let-inside-a-for-loop-so-slow-on-chrome