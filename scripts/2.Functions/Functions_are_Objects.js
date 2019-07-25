/* Functions are Objects*/

function greet(){
	console.log('hello');
}

greet.language = 'english'; /*Here I'm adding a property to the function
as if it were an object (which it is), the code is just another property*/
console.log(greet.language); //You can check that the property exists
