/* Destructuring Objects*/

/* As explained before, when destructuring objects we are referencing
the properties by name and not by position as in destructuring arrays.
That's why the names have to match, but we can use an alias if we want
to use another name as reference.
*/

let myObject = {
name: 'Nico',
language: 'es',
greet: function(){
	console.log('Hi there');
}
};

let {name, greet:hello} = myObject;

//greet();
//hello();

/* Which function do you think will work? Why?





