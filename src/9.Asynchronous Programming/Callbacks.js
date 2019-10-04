/* Asynchronicity */

/*
In a synchronous programming model, things happen one at a time while in a asynchronous programming model,
multiple things can happen at the same time.
One simple example to show their differences is a program that fetches two resources from the network and then
combines the results.

In a synchronous system, the easiest way to perform this task is to make the requests one after the other,
the total time will be at least the sum of the two response times (drawback).
On possible solution is to start additional threads of control (not the same as asynchronous programming).
A thread is another running program whose execution may be intervaled with other programs by the OS 
(multiple threads may run at the same time on different processors).
In an asynchronous system, the task that initiated the action continues running, while the action happnes
alongside it, notifying the program when it is finished. This creates a 'split' in the timeline of the tasks.

For a better understanding about Asynchronous and Multithreading programming check:
https://stackoverflow.com/questions/34680985/what-is-the-difference-between-asynchronous-programming-and-multithreading
In other words, using a very simple example: If you have to hire workers to complete different tasks,
threading is about workers and asynchronicity is about tasks.

Is important to note that JavaScript is a single threaded and synchronous language that can be
manipulated to have asynchronous functionalities.
https://dev.to/steelvoltage/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd
*/



/* Callbacks */

/*
In simple words, a callback is a function that is to be executed after another function has finished.
The action is started, and when it finishes, the callback function is called with the result.
So, why do we need callbacks?
Imagine you have a function that fetched data from a server and then you have a bunch of other functions that
will use that data as an input. For obvious reasons we need the data fetch function to be executed in the first place.
Since such functions can have larger execution times, there's no certainity that the functions will execute in
the right order, generating an error as the argument for the following functions will be missing.
Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.
*/

function completeTask(task, callback){ //callback function defined as second argument
    this.task = task;
    console.log(`${task} in progress...`);
    callback();
}

completeTask('First task', function(){   //callback function can also be defined elsewhere and be called later
    console.log(`${this.task} finished!`)
});

//This way we make sure of the execution order we want

//A real case example is presented in the coming lectures



