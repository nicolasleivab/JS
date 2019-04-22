/* Function Statements and Functions Expressions*/

statement(); //What will happen if we call it before?

function statement(){
	console.log("function statement is invoked");
}

functionExpression(); //What about function expressions?

var functionExpression = function (){
	console.log("function expression is invoked");
}

/* Functions statements are hoisted so it doesn't matter
the order since the function will be sitting in memory
when it's called.
Functions expressions aren't hoisted, only the variable is
hoisted without the expression.
*/