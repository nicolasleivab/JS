/* Understanding Closures*/

function buildFunctions() {

	var arr = [];

	for (var i = 0; i < 3; i++) {

		arr.push(
			function() {
			
					console.log(i);	
			}

		)
	}

	return arr;
}

var fs = buildFunctions();

fs[0]();    //Which values are you expecting and why?
fs[1]();
fs[2]();

/*
A quick fix for this is using let (ES6) instead of var in the for loop to store
the different values.
The old fix was to use an IIFE in order to create 3 different execution contexts to
store the different values that are created on the fly, like this:

		arr.push(
			(function(j) {
				return function() { 
					console.log(j);
				}
			}(i))
*/



