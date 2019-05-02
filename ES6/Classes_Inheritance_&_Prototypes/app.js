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
		console.log('Hi, my name is ' +this.firstName+ ' ' +this.lastName +'.')
	}

}

let student = new Student('Nico', 'Leiva');

student.greet();

//What is the prototype of this student created?

console.log(student.__proto__);

//console.log(student.__proto__ == Object.prototype);
//What do you think this will return?

//console.log(student.__proto__ === Student.prototype); //And now?

class Nico extends Student {
	constructor(degree){
		super('Nico', 'Leiva')   //'super' refers to its parent and 'this' to this class
		this.degree = degree;
	}

/*
greet(){
console.log("Hello, I'm 'this'")   //Uncomment this function and see what happens
}                                  //Find a workaround without commenting out the function
*/


	greet2(){
		this.greet();
		console.log('I study ' +this.degree+ '.');
	}
}

let nico = new Nico('Computer Science');

nico.greet2();


/*
Check the prototype of the new object created and ask yourself
What 'extends' method really does.
*/

/*
Remember that in order to access a class property you need to create
a new object. Otherwise you can use the keyword 'static' just before
a method or function in order to access it directly.
*/