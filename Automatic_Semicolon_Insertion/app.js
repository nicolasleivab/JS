/* Automatic Semicolon Insertion*/

function getObject() {

	return              //Do you see any problem here?
	{
		value: 1
	}
}

console.log(getObject());

/* JS syntax parser will automatically insert a semicolon after
return which will get us out of the function before defining the
object literal.
*/

/*
Solution:
	return {
		value: 1
	}
*/

