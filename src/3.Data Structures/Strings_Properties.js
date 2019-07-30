/* String Properties */

/*
We can use methods like length, toUpperCase and access to elements with string as if they were arrays.
Unfortunately, we can't add new values (strings, like any primitive value, are immutable).
However, these types of values do have built in properties.
*/

console.log('Hello'.slice(1,4));

console.log('JavaScript'.indexOf('a')); // It will return the index of the first 'a' from the beginning

console.log('Once upon a time'.indexOf('ti')); // We can also search for a combination of characters (not possible with arrays)

console.log(" text \n  ".trim()); // Trim function removes any type of whitespaces from the start and end of a string

console.log(String(1).padStart(6, '0')); // Padding


let sentence = 'Strings are weird'; 

let sentenceWords = sentence.split(); // Split words from a sentence and return array

console.log(sentenceWords);

console.log(sentenceWords.join()); // Join words from an array in a sentence


console.log('HA'.repeat(7)); // Repeat string n times