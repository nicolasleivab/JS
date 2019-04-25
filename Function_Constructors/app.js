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





