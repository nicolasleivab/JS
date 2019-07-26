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

var myObject4 = object.create(myObject1)
myObject4.firstValue = 101;
myObject4.secondValue = 110;
console.log(myObject4);

/* Simply make objects and create a new objects from them pointing
to other objects as prototype and then override or hide properties or
methods */






