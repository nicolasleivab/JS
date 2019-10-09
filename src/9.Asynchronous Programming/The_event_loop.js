/* The Event Loop */

/*
Asynchronous behaviour happens on its own empty function stack causing the management of exceptions a bit hard
if we are not using promises.
*/

try{
    setTimeout(() => {
        throw new Error("Something went wrong");

    }, 20);
} catch (_) {
    console.log("error caught") //since each callback starts with a mostly empty stack, catch handlers won't be
                               // on the stack when they throw an exception
}

/*
JavaScript runs only one program at a time, like making a loop around your program (event loop).
If there's nothing to be done the loop stops, but as events come in, they are added to the queue 
and wait to be executed in order.
*/

/* The Message Queue */

// Try this code and guess the output order. Try to visualize its call stack.

const second = () => console.log('second!');

const third = () => console.log('third!');

const first = () => {
  console.log('first!')
  setTimeout(second, 0)
  third()
};

first();

/*
When setTimeout() is called, the Browser or Node.js start the timer. After the timer expires
(even in this case with 0), the callback function is put in the Message Queue.
The loop starts processing the call stack and when there's nothing left, it starts with the
message queue as second priority.

For more information about the event loop check: https://flaviocopes.com/javascript-event-loop/
or this video from Philip Roberts: https://www.youtube.com/watch?v=8aGhZQkoFbQ
*/
