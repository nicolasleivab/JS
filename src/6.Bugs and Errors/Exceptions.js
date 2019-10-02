/* Exceptions */

/*
Exceptions are a method that allows the program/code to raise an exception
whenever it runs into a problem.
An exception acts like a super return that jumps out of not just the current
function but also its callers, all the way down to the first call that started
the current execution (concept: unwinding the stack)
However, their true power lies in the fact that you can set 'obstacles' along 
the stack to 'catch' the exception as it is zooming down so you can do something
with it to solve the problem.
*/

function promptAction(question) {
    let result = pompt(question);
    if (result.toLowerCase() == "jump") return "J";
    if (result.toLowerCase() == "run") return "R";
    if (result.toLowerCase() == "walk") return "W";

    throw new Error("Invalid action:" + result+", valid actions: jump, run or walk");
    //throw keyword is used to raise an exception with a standard Error constructor (object with a message property)
    }

    function move(){
        if (promptAction("Which action do you want to perform") == "J") {
            return "you jumped";
        } else if (promptAction("Which action do you want to perform") == "R") {
            return "too tired to run";
        } else {
            return "you are walking";
        }
        
    }

    try { //when the code in the try block causes an exception to be raised, the catch block is evaluated
        console.log("Action:", move());
    }catch (error) {
        console.log("Something went wrong: " + error);
    } 
    //after the catch block finishes, the program proceeds beneath the entire try/catch statement.

