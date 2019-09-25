/* Strict Mode */

/*
Strict Mode is a mode in JavaScript that eliminates some JavaScript 
"silent" errors by forcing them to throw errors.
*/

//Try to guess the error in the following function
function oneToTen() {
    "use strict";
    for (count = 1; count < 11; count++){
        console.log(count);
    }
}

oneToTen();

/*
Normally, JavaScript "silently" generates and use a global binding everytime you forget to
declare it (let count = 1;).
When using strict mode, an error is reported instead.
*/


/* Strict Mode and "this" */

function Pokemon(type) {
    this.type = type;
}

let charmander = Pokemon('Fire');//spot the error here
console.log(charmander);
console.log(type); //what's happening here?

/*
If you call a method or constructor incorrectly (example: missing the new keyword),
JavaScript will refer to the global scope object, therefore creating a new binding
in the global scope (let type = 'Fire').
However, using 'strict mode' in the function statement will immediately return an error.
*/
