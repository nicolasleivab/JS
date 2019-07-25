/* Immediately Invoked Function Expressions*/

var getMyObject = function(stateValue, i){
	var myObject = {state: stateValue, value: i};
	console.log(myObject);
}(0, 2);  //Here we are invoking the function just after creating it


//Let's try to define a function statement as it were an IIFE
(function(stateValue, i){
	var myObject = {state : stateValue, value: i};
	console.log(myObject);

}(0, 1))       //This doesn't override variables with same name

/*
You can trick the syntax parser wrapping a function statement in ()
since only expressions can be wrapped in ()
You can see this format in most libraries and frameworks
*/



