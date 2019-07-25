/* Expressions and Statements */

/*
Roughly speaking, an expression is any piece of code that produces a value while 
a statement stands on its own and performs an action that 'changes something'.
In JavaScript, wherever a statement is expected, you can also write an expression (called expression statement). 
The reverse is not true, you cannot write a statement where JavaScript expects an expression.
A program is built when you declare a set of statements, in JavaScript you can use a semicolon to chain statements.
*/

2 + 2                             //Which ones are expressions and which ones are statements?
myVar
let x = (10 > 11 ? true : false);
true;

/*
For a better understanding about the difference between JS expressions and statements go to:
https://2ality.com/2012/09/expressions-vs-statements.html
*/


/* Bindings */

// A binding is used to hold a value in memory

let nineValue = 3*3; //with this statement we create a binding that 
                     //holds the value of the expression 3*3 (9)
nineValue * 3        // We can now use the name of the binding as an expression within another expression
function multiplybyNine(x){return x * nineValue};  // or a statement.

// Always remember that bindings only 'grasp' values, which means it can be modified
ninveValue = 'Nine';

let x = 1, y = 3; // You can use a single statement to define several bindings

/*
It's important to not use a 'keyword' as a binding name or else you'll get an error
You can find the list of reserved keywords here:
https://www.w3schools.com/js/js_reserved.asp
*/


/* Var, Let and Const */

/*
There are different ways to create bindings, 'var' was the way of creating bindings in pre 2015 JS
the major difference between var, const and let is about their scope (which will be explained later).
In addition, creating bindings with const enables that the grasped values can't be changed within the scope.
*/

const constValue = 1;
constValue = 3;







