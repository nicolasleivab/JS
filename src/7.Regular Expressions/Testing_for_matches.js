/* Reg Exp. Testing for Matches */

// A regular expression is a type of object that can be constructed like this:

let reg1 = new RegExp("asd"); //RegExp constructor
let reg2 = /asd/; //literal value (both represent the same pattern)

//special characters must be preceded by a backslash if they are meant to represent the character itself

let question = /how are you\?/;

/*
Regular expressions have several methods, the most basic one is the method test(), which returns a boolean.
If you pass a string it will tell you wether the string contains a match of the pattern in the expression.
*/

console.log(/asd/.test('asdf')); // -> true
console.log(/asd/.test('asedf')) // -> false
console.log(/asd/.test('astrtrasdyt')) // ?

//If the regexp('asd') occurs anywhere in the string test will return true 

/*
In regexp, putting a set of characters between square brackets makes that part of the expression 
match any of the characters between the brackets.
*/

console.log(/[0-9]/.test('in 1997'));

/*
Built-in shortcuts:

\d (Any digict character)
\w (An alphanumeric character)
\s (Any whitespace character)
\D (A character that is not a digit)
\W (A nonalphaumeric character)
\S (A nonwhitespace character)
. (Any character except for newline)
^ (Invert a set of characters)

*/
