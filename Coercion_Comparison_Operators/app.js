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

/* For a better understanding about the null case check:
https://stackoverflow.com/questions/2910495/why-null-0-null-0-but-not-null-0
*/

