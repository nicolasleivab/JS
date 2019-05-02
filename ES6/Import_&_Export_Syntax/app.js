/* Import & Export Syntax*/

/*
Important: Remember that Chrome does not support localhost for CORS requests 
(an open bug since 2010).
There are several ways to find a workaround, some of them explained here:
https://stackoverflow.com/questions/10883211/deadly-cors-when-http-localhost-is-the-origin
Anyways, starting a http.server in the file with python (python -m http.server) will
do the trick.
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