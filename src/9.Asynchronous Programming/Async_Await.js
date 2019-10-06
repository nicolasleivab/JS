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

/*
The keyword await makes JavaScript wait for a promise to be settled. It can only be used inside an Async
block (it won't work if used in regular functions).
*/

async function asyncFunction3() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("resolved!"), 500)
    });
  
    let result = await promise; //wait until the promise settles

    alert(result); 
}
  
asyncFunction3();



/* Error handling */
