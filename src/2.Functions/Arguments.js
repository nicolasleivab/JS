/* Arguments and Spread*/

/*
In ES6 we can define default parameters as we write the function.
*/



let myFunc = function(n = 3, str = 'Fizz') {
	
	for (let i = 1; i < 101; i++){
		if (i % n == 0){
			console.log(str)
		}
		else {
			console.log(i)
		}
	}
}

myFunc();



function isEqualTo(a, b = a){
	console.log({a,b});
	return a === b;
}

console.log(isEqualTo(10));


/*
	You can assign a default parameter the value of the precedent 
	parameter (like the previous example), but not the other way around

Try this and see what happens:

function isEqualTo(a = b, b = 10){
	console.log({a,b});
	return a === b;
}

console.log(isEqualTo());

*/

//You can't assign a parameter value that hasn't been defined yet




/* Default Parameters before ES6 */


function person(name, gender, language){
	
    // language = language || 'es'; //setting default argument in ES5.
	console.log({name, gender, age});
}

person(); //What will happen if I don't pass any argument?

//person('Nico', 'Male', 'es'); //passing arguments
//console.log(arguments); //will print defined arguments (not entirely a JS array)


