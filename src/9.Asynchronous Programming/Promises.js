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

