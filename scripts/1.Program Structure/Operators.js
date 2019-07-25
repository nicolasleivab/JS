/* Operators */
//Types

typeof(null); //Unary operator (takes one value)

null === undefined; //Binary operator (takes two values)

console.log(true ? 1 : 2); //Ternary or *conditional* operator. If is true it will pick the middle value, otherwise the value on the right

console.log(2 > 3 ? 1 : 0); // if (2 > 3){ console.log(1)} else{console.log(0)}; in the console there's no need of console.log to make it work

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

//Tip: When in doubt, just add parentheses

/*In this example JS reads it like this:
(init == true) || ((selectedCategory != undefined) && (selectedState != undefined))
*/


/* Coercion and Comparison Operators*/

var a = 2 < 1 < 3;   //By precedence rule, this will run from left to right and coerce
var b = 1 < 2 < 3;   // the first comparison (true or false) to a number (1 or 0)
                     // then that value will be compared to the next value to the right (1/0 < 3)

if (b == true){              //change the var and look for (unexpected) results
	console.log("Case 1 is true");
}
else{
	console.log("Case 1 is false");
}



if (false == 0){                       //Use "===" for a strict comparison and "==" if you want
	console.log("Case 2 is true");         // to conciously coerce the values
}
else{
	console.log("Case 2 is false");
}

/*console.log(Number(false)); //Run this in the console to see that both values are coerced to 0
console.log(Number(null));
*/


if (false == null){              //what would you expect for this comparison?
	console.log("Case 3 is true");
}
else{
	console.log("Case 3 is false");
}

/* For a better understanding about the null case go to:
https://stackoverflow.com/questions/2910495/why-null-0-null-0-but-not-null-0
*/

/* Template Literals*/

let firstName = 'Nicolás';
let lastName = 'Leiva';

let greet = `
 Hi, I'm ${firstName} ${lastName}

`;

console.log(greet);

/*
With this syntax we can insert variables inside a string
without having to go through the old format
*/