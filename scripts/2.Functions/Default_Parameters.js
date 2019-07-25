/* Default Parameters in Functions*/

// let b = 10;

function isEqualTo(a, b = a){
	console.log({a,b});
	return a === b;
}

console.log(isEqualTo(10));

/*
In ES6 we can define default parameters as we write the function.
Note that you can also assign this value in the outer environment.
*/

/*
	You can assign a default parameter the value of the precedent 
	parameter (like the previous example), but not the other way around

Try this and see what happens:

function isEqualTo(a = b, b = 10){
	console.log({a,b});
	return a === b;
}

console.log(isEqualTo());

*/

//You can't assign a parameter value that hasn't been defined yet
