/* Functions as Values */

/*
It's possible to store a function value in a new binding, use it
as an argument for another function and do anything that other values
can do. A binding that grasp a function is the same as a regular binding.
*/

let myFunc = function(n, str) {
	
	for (let i = 1; i < 101; i++){
		if (i % n == 0){
			console.log(str)
		}
		else {
			console.log(i)
		}
	}
}

myFunc(9, 'Fizz');


/* Default Parameters in ES6 */

/*
From ES6 and beyond, default parameters can be defined inline
*/

let myFunc = function(n = 3, str = 'Fizz') {
	
	for (let i = 1; i < 101; i++){
		if (i % n == 0){
			console.log(str)
		}
		else {
			console.log(i)
		}
	}
}

myFunc();



/* Functions are Objects*/

function greet(){
	console.log('hello');
}

greet.language = 'english'; /*Here I'm adding a property to the function
as if it were an object (which it is), the code is just another property*/
console.log(greet.language); //You can check that the property exists
