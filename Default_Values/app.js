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

/* Now imagine default values causing conflicts between 
different libraries that you are loading in your code

check: https://blog.acolyer.org/2018/06/20/conflictjs-finding-and-understanding-conflicts-between-javascript-libraries/

