/* The Replace Method */

/*
Strings values have a replace method that can be used to replace part of the string with another one.
The first argument can also be a regexp, in which case the first match of the regexp is replaced.
*/

console.log("car".replace("r", "t")); //-> cat
console.log("Borobudur".replace(/[ou]/, "a")); //-> Barobudur

// When a g option is added to the regexp, all matches in the string will be replaced
console.log("Borobudur".replace(/[ou]/g, "a")); //-> Barabadar

//Refering matched groups in the replacement string
let listOfPeople = "Johnson, Brian\nSmith, Chad\nWadler, Sheila"
console.log(listOfPeople.replace(/(\w+), (\w+)/g, "$2 $1")); //exchange second element with the first one

//Passing a function
console.log("css preprocessors like sass or less".replace(/\b(css|sass|less)\b/g, str=>str.toLocaleUpperCase()));


/* The Search Method */

//The indexOf method can't be called with a regexp, instead you can use search()
console.log("    word".search(/\S/)); //-> 4
console.log("   ".search(/\S/)); //-> -1

//Unfortunately there is no way to indicate that the match should start at a given offset