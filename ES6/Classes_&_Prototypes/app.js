/* Classes & Prototypes*/

/*
Similar to constructor syntax of ES5 with some differences
*/

class Student {

    constructor(firstName, lastName) {         //constructor keyword reserve for ES6
       this.firstName = firstName;
       this.lastName = lastName;
    }

	greet() {
		console.log('Hi, my name is ' +this.firstName+ ' ' +this.lastName)
	}

}

let student = new Student('Nico', 'Leiva');

student.greet();

//What is the prototype of this student created?

console.log(student.__proto__);

//console.log(student.__proto__ == Object.prototype);
//What do you think this will return?


//console.log(student.__proto__ === Student.prototype); //And now?
