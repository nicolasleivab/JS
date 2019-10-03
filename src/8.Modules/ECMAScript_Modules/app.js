/* ECMASCript Modules*/

/*
Important: Remember that Chrome does not support localhost for CORS requests 
(an open bug since 2010).
There are several ways to find a workaround, some of them explained here:
https://stackoverflow.com/questions/10883211/deadly-cors-when-http-localhost-is-the-origin
Anyways, starting a http.server in the file with python (python -m http.server) will
do the trick (or any way of preference)
*/

/*
CommonJS modules notation can be slightly awkward, ex: things you add to export are not avialable 
in the local scope, require is a normal function call taking any kind of argument (not a string literal).
This can make a bit hard to determine the dependencies of a module whithout running its code.
This is why the JavaScript standard from 2015 introduces its own module system.
The differences are in the details, the notation is now integrated in to the language.
Instead of calling a function to access a dependency, you use a special import keyword (and export).
Whenever you import from another module, you import the binding and not the value, which means an exporting
module may change the value of the binding at any time, and the modules that import it will see its new
value.
*/


import {keyValue, test} from './external.js';

/*We can set an alias for the imported variable and then call it by the alias
import {keyValue as key, test} from './external.js';
console.log(key);
*/

console.log(keyValue);
test();
console.log(keyValue);

//Import Default

import ab from './external.js';

console.log(ab);

/*
You can change the name of the imported variable since it has been defined
as default in the external.js. Try changing the name of the variable
(both in the import and console log) and see what happens.
*/

//Import everything from external.js as an object

import * as imported from './external.js';
console.log(imported);

/*
Importan thing to consider when working with modules:

1. Modules are always in Strict Mode (no need to define "use strict").

2. Modules don't have a shared, global Scope. Instead each Module has its own Scope.

/*