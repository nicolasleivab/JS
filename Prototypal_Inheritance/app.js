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

// Never use __proto__ like this, this is for demo purposes only.
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
console.log(myObject3.productOfValues()); //Guess the output: a) undefined or b) 0,
                                          /* Think of the prototype chain*/







