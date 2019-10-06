/* Async Functions */

/*
Simply put, Async and Await are extensions of promises, a special syntax that makes it simplier
to wotk with promises.
Using async before a function implies that the function always returns a promise.
If a promise is not returned, JavaScript automatically wraps it in a resolved promise with its value.
*/

async function asyncFunction() {
    return 'Promise returned';
}
  
asyncFunction().then(alert); // string

/*
Since we got our value it means that a promise was returned, 
otherwise the .then() method would not be possible.
*/

//We can also explicitly return a promise:

async function asyncFunction2() {
    return Promise.resolve('Second promise returned');
}
  
asyncFunction2().then(alert); // string



/* Await */


/* Error handling */
