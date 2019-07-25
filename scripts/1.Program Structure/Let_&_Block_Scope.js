/* Let & Block Scope*/

let/*var*/ value = 1;

if (true) {
	let/*var*/ value = 2;   //Try changing let for var in different combinations
	console.log(value);     // and check the results in the console
}

console.log(value)

/* The use of 'let' allows us to use block scoping, meaning that contains
the variable in the body where it's defined */

// This is specially useful when using functions within for loops

for (let/*var*/ i = 0; i < 5; ++i) { //What do you think would happen if you use
                                     //'var' instead of 'let'
  setTimeout(function() {
    
    console.log("i = " + i);
  
  }, i * 50);

}

/* A new i is created for each iteration of the loop, so that closures created 
within the loop close over the i for *that* iteration.
*/

// https://stackoverflow.com/questions/40449494/why-is-using-let-inside-a-for-loop-so-slow-on-chrome



