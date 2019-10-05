/* Promises */

/*
A promise is an asynchronous action that may be completed at some point and return a value and notify it
as soon as it's available.
In other words, a promise is an object that may produce a single value in the future: either a resolved value, 
or an error that explains why it failed. 
A promise may be in one of 3 possible states: fulfilled, rejected, or pending. 
Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
*/

//The easiest way to create a promise is by calling Promise.resolve.
let ten = Promise.resolve(10);

ten.then(returnedValue => console.log(`Got ${returnedValue}`)); //'then' method to get the result of a promise

/* You can add up to multiple callbacks to a single promise and they will be called, even if the promise
has already resolved.
The 'then' method also returns another promise which resolves to the value that the handler function returns or,
if that returns a promise, waits for that promise and then resolves it to its result.
It might be useful to think of promises as devices that move values into an asynchronous reality.
*/


/* Promise constructor */

/*
You can also create a promise using the Promise constructor. The constructor expects a function as argument
immediately calling it and passing it a function that it can use to resolve the promise.
*/

let wait = time => new Promise((resolve) => setTimeout(resolve, time));

wait(1000).then(() => console.log('1000 milliseconds have passed!')); 

/*
The function that the constructor expects takes two parameters, resolve(), and reject(). 
In the example above, just resolve() is used leaving reject() off the parameter list.
*/

/*
Note: A promise is settled if it’s not pending (it has already been resolved or rejected). 
After being settled a promise can not be resettled. Calling either resolve() or reject() won't have any effect. 
The immutability of a settled promise is an important feature.
*/


/* Failures */

/*
One of the problems the callback style of asynchronous programming is that failures are hard to be properly
reported to the callbacks.
The typical convention is that the first argument to the calback is for the failure report and the second for
the returned value in a succesful situation. Such callback functions must always check wether they received an
exception and make sure that any problems they cause, including exceptions thrown by functions they call, are 
caught and given to the right function.
Promises make this easier since they can be either resolved or rejected. Much like resolving a promise provides
a value, rejecing one also returns one (reason of rejection). There's a Promise.reject function that creates
a new, immediately rejected promise.
Promises have a catch method that registers a handler to be called when the promise is rejected, similar to how
'then' handlers handle normal situation
*/

let wait2 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Something went wrong!")), 1000); //passing an Error object.
});

promise.then(
    result => alert(result), //doesn't run
    error => alert(error) //shows error
);