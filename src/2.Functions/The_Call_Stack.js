/* The Call Stack */

/*
Every function has to come back to the place it was called when it returns. This means that the
computer must remember the context from which the call happened. The place in which the computer
stores this context is called the call stack.
Everytime a function is called, the current context is stored on top of this stack.
*/

function first(){
    console.log("I'm the first to be called")
    second();
}

function second(){
    console.log("I'm the second to be called")
    function third (){
        console.log("I'm the last one!")
    }
    third();
}

first();

/*
This stack looks like this:

not in function
    in first
        in console.log
            in second
                in console.log
                    in third
                        in console.log
                    in third
                in console.log
            in second
        in console.log
    in first
not in function

NOTE: Remember that console.log() is a function
*/


function inception(){  //What do you expect to happen?
    return dream();
}

function dream(){
    return inception();
}

console.log("Shouldn't be afraid to " + dream() + " a little bigger");

/*
The code peresented here causes an infinite back-and-forth between these two functions.
Since storing the stack requires space in the computer's memory, an infinite recursive
function grows the stack infinitely causing it to fail.
"RangeError: Maximum call stack size exceeded"
*/