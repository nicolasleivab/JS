/* Arguments and Spread*/

function person(name, gender, language){
	
    // language = language || 'es'; //setting default argument, check ES6 diff.
	console.log({name, gender, age});
}

person(); //What will happen if I don't pass any argument?

//person('Nico', 'Male', 'es'); //passing arguments
//console.log(arguments); //will print defined arguments (not entirely a JS array)