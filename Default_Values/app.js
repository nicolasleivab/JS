/* Default Values*/

function greet(name){
	console.log("Hello " + name);
}

greet(); //This will print undefined coerced to string "undefined"

//greet(0); What do you think will happen in this case?


/*Alternative

function greet(name){
	name = name || "<Your name here>"   //this way you set a default value
	console.log("Hello " + name);
}


