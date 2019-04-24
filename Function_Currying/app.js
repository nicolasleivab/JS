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



