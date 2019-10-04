/* Common JS */

/*
CommonJS module specification is the most used approach to work with modules in JavaScript.
CommonJS is the standard used in Node.js and is the system used by most packages on NPM.

In CommonJS, modules are loaded synchronously and processed in the order they are found. 
The system works on the server side and is not suitable for the client-side (see next lecture:
ECMAScript modules).

The main concept in CommonJS modules is a function called require. Each time you call this function
with the module name of a dependency, it makes sure the module is loaded and returns its interface.
*/

const package1 = require('moduleName');

//the loader wraps the module code in a function therefore getting its own local scope.

//a JS file is a module when it exports one or more of its symbols (variables, functions, objects)

const sumProperties = require('external_module.js');

let sum = sumProperties([{a:12, b: 11}, {a:7, b:22}]);

console.log(sum);

/*
You need to run these files with Node.js (lectures will be avaiblable in the future) since the browser doesn't 
natively support this feature (for client-side modules see next lecture: ECMASCript modules)
*/