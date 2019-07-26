/* Getters & Setters*/

class Person {
	constructor(name) {
		this._name = name;  //You can insert an underscore to "control" accessibility from the outside
                            //encapsulation* https://stackoverflow.com/questions/4484424/underscore-prefix-for-property-and-method-names-in-javascript
	}

	get name() {
		return this._name.toUpperCase(); //The property can be modified at will
	}

	set name(value) {
		if (value.length > 2) {
			this._name = value;
		}
		else{
			console.log('Rejected!');
		}
	}
}

let person = new Person('Nico');

console.log(person);

person.name = 'Ni';

console.log(person.name);
//console.log(person);
//console.log(person._name);

/*
Try to comment out the get part and see what happens.
Try different combinations of names to trigger the condition and 
log results with console.log(person), console.log(person.name)
and console.log(person._name)
What changes? Why? How can we get a workaround with different methods
What are 'get' and 'set' really doing here?
https://stackoverflow.com/questions/28222276/what-are-getters-and-setters-for-in-ecmascript-6-classes
*/