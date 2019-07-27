/* Functions as Values */

/*
It's possible to store a function value in a new binding, use it
as an argument for another function and do anything that other values
can do. A binding that grasp a function is the same as a regular binding.
*/

let x = 3

let timesFour = function(x) {
	return x * 4;
};

console.log(timesFour());  //For better understanding check Arguments.js script
console.log(timesFour(5)); 


let myFunc = function(n, str) {
	
	for (let i = 1; i < 101; i++){
		if (i % n == 0){
			console.log(str)
		}
		else {
			console.log(i)
		}
	}
};

myFunc(9, 'Fizz');  //Try to modify these values in the console



/* Functions are Objects*/


let greet = function(){
	console.log('hello');
};

greet.language = 'english'; /*Here I'm adding a property to the function
as if it were an object (which it is), the code is just another property*/

console.log(greet.language); //You can check that the property exists

