/* (Fat) Arrow Functions */

var fn = (a, b) => a * b; 

console.log(fn(2,4));

/*
same as:
function fn(a, b){
	return a * b;
}
*/

setTimeout(() => console.log('Hi'), 1000);

/*
same as:
	setTimeout(function(){
	console.log('Hi')
	}, 1000);

*/

var button = document.querySelector('button');

function fn2() {
	console.log(this);
}

var fn3 = () => console.log(this);

button.addEventListener('click', fn2); //Try fn2 and then fn3 to see the differences

/* Why fn2 refers to the html button element and fn3 to the window object?
The fat arrow function keeps its context, you won't need call(), apply(), bind()
or others to find a workaround to keep 'this' to the right execution context */



/* Function Currying*/

function multiply (a, b){
	return a*b;
}

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree('Insert any value for b'));

/*
bind() makes a copy of the function, we can establish
preset parameters and reuse the function (function currying)

This is especially useful with math functions.
*/ 

/***You can't bind() arrow functions (you can't change 'this').
Arrow functions will always be called with the context in which 
they were defined.
***/

/* Function Borrowing*/

var myObject = {
	firstProperty: 'value 1',
	secondProperty: 'value 2',
	getConcatenation: function() {

		var concatenation = this.firstProperty + ' ' + this.secondProperty;
		return concatenation;
	}
}

var myObject2 = {
	firstProperty: 'value 3',
	secondProperty: 'value 4'
}

console.log(myObject.getConcatenation.apply(myObject2));

/*
call() works similar to apply() with the difference that the latter needs an array as input.
*/



