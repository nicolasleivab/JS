/* Protoypal Inheritance*/

var myObject1 = {
	firstValue: 0,
	secondValue: 0,
	productOfValues: function(){
		return this.firstValue*this.secondValue;
	}
}

var myObject2 = {
	firstValue: 1,
	secondValue: 11
}

/* Never use __proto__ like this, this is for demo purposes only.
You can also check lecture Function Constructors to find a better way to do this. */

myObject2.__proto__ = myObject1;
console.log(myObject2.productOfValues());

/* It looks for the function in the proto. When this function is invoked,
the execution context when it creates the 'this' variable, knows what object
originally called it. 
*/

var myObject3 = {
	firstValue: 111,
}

myObject3.__proto__ = myObject1;
console.log(myObject3.productOfValues()); //Guess the output: a) undefined, b) NaN or c) 0,
                                          /* Think of the prototype chain*/


/* Pure prototypal inheritance*/

var myObject4 = Object.create(myObject1) 
myObject4.firstValue = 101;
myObject4.secondValue = 110;
console.log(myObject4);

/* Simply make objects and create a new objects from them pointing
to other objects as prototype and then override or hide properties or
methods */



/* Function Constructors*/

function Student(ID, firstname, lastname, degree, address) { //Tip: Always capitalize the first letter of a function constructor name
	//to remind you that you need the 'new' keyword later
/*The 'this' variable points a new empty object which
is later returned from the function automatically*/
//console.log(this)

this.ID = ID;
this.firstname = firstname;
this.lastname = lastname;
this.degree = degree;
this.address = address;
}

var student1 = new Student(11111111, 'Joe', 'Black', 'Public Relations', {'street': 'Main St. 111', 'city': 'Neverland'});

console.log(student1);	

var student2 = new Student(10101010, 'Emma', 'Taylor', 'Computer Science', {'street' : 'Great Av. 101', 'city' : 'Everland'});

console.log(student2);		

/* When you use a function constructor, it already sets the prototype for you.
Type student1.__proto__ in the console and check the output */

Student.prototype.getFullName = function (){
return this.firstname + ' ' + this.lastname;	
}

console.log({'student1 Full Name': student1.getFullName(), 'student2 Full Name': student2.getFullName()});

/* By setting a method in the prototype we can save memory space since it doesn't have to be copied 
evert time we create a new object, when the object can found that method it can be found in the prototype chain*/

function Tutor(...args){ //spread operator to get the arguments we are passing when calling the function
	Student.apply(this, args)   //aplly the previous constructor to a new constructor, binding the context
}                               //of 'this' to the new object. apply() when we have an array as argument

var tutor = new Tutor(10101010, 'John', 'Nash');

tutor.getFullName(); //why this doensn't work?

//We are not inheriting the prototype of the first object, methods are not passed with apply()

Tutor.prototype = Object.create(Student.prototype); //now the methods of the Student proto are passed to the new object

console.log(tutor.getFullName());





