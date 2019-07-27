/* Function hoisting */

/*
There's a shorter way to create a function binding called function declaration
*/

sqr(4); // What happens if we call the function before its declaration?

function sqr(x) {     //easier to write and doesn't require a semicolon at the end
	return x * x;
}

/*
There's a property called hoisting in JavaScript that lift functions declarations and var defined variables
to the top of their scope (functions declarations go to the very top above variables).
However, it doesn't work the same way with functions expressions.
*/



/* Function Statements and Functions Expressions*/

statement(); //What will happen if we call it before?

function statement(){
	console.log("function statement is invoked");
}

functionExpression(); //What about function expressions?

let functionExpression = function (){
	console.log("function expression is invoked");
};


/* Functions statements are hoisted so it doesn't matter
the order since the function will be sitting in memory
when it's called.
Functions expressions aren't hoisted, only the variable is
hoisted without the expression.
*/