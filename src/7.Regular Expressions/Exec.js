/* exec() */

/*
Regular expressions also have an exec (execute) method that will return null if no match was 
found and return an object with information about the match otherwise.
*/
let match = /\d+/.exec("three three 300");
console.log(match); // → ["300"]
console.log(match.index); // → 12

/*
An object returned from exec has an index property that tells us where in the string the successful match begins. 
String values have a match method that behaves similarly.
*/

console.log("three three 300".match(/\d+/)); // → ["300"]

/*
When the regular expression contains subexpressions grouped with parentheses, the text that matched those groups 
will also show up in the array. The whole match is always the first element. The next element is the part matched
by the first group, then the second group, and so on.
*/

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("he said 'no'")); // → ["'no'", "no"]

/*
When a group does not end up being matched at all, its position in the output array will hold undefined. 
When a group is matched multiple times, only the last match ends up in the array.
*/
console.log(/concious(ly)?/.exec("concious")); // → ["concious", undefined]
console.log(/(\d)+/.exec("456")); // → ["456", "6"]