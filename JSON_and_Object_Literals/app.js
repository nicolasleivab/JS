/* JSON and Object Literals*/

var objectLiteral = {
	firstName : "Nico",
	isAProgrammer: true
}

console.log(objectLiteral);

'{"firstName": "Nico" "isAProgrammer": true}'; //JSON format, property names must be wrapped ""

var objectValue = JSON.stringify(objectLiteral); //Object to JSON

var jsonValue = JSON.parse('{"firstName": "Nico", "isAProgrammer":true}'); //String(JSON) to object

console.log(objectValue);
console.log(jsonValue);

/*
JSON is technical a subset of the Object
Literal syntax 
anything that is JSON valid is also valid
Object literal syntax but not the other way
around
*/
/*
JSON != Object Literal,
JSON is more strict, easy transition when pushing data from a client to the
server or in the case of Node.js when you are running JS on the server
*/