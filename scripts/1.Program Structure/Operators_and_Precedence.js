/* Operators Precedence*/

var init = true;             //modify values and check for changes in the console
var selectedCategory = 1;
var selectedState = 0;

if (init == true || selectedCategory != undefined && selectedState != undefined) {
console.log("initialized");
} else {
console.log("not initialized");
}

/*For more information you can access a precedence table here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence*/

/* Most frequent ones (from higher to lower): 
1. Grouping: ()
2. Member access . or [...]
3. Not: !
4. Comparison, e.g. < , >= , === , !=, ...
5. Logical AND &&
6. Logical OR ||
*/

/*In this example JS reads it like this:
(init == true) || ((selectedCategory != undefined) && (selectedState != undefined))
*/