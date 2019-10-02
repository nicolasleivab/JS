/* Testing */

/*
Tests can be seen as small labeled programs that verify pieces or aspects
of your code. Knowing how to write tests can help you to verify if your 
program behaves properly in any situation, which can save you a lot of time
in comparison to manually checking your program for errors.
*/

function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`); //will fail if it returns false
}

/*
The label should contain a message with the expected result.
For this excercise, a simple text generator function will be tested
as an example.
*/

function textGenerator(name, age) {
    return (`${name} is ${age} years old`);
}

test("should output name and age", () => {
    return textGenerator('Froncio', 33) == "Froncio is 33 years old";
})

test ("should output default text", () => {
    return textGenerator('','') == " is  years old";
})



/* Debugging */

/*
Once you notice that there's something wrong with your program, the next natural step is to find
exactly which part of the code is introducing the bug.
There are several ways to find this but the most efficient ways are taking enough time to think
about the program, then introduce strategic console.log() in different parts of the code that you
might suspect.
Another way is using the debugger keyword, if your browser supports the debugger it will pause the
program where you put it creating strategic breakpoints.
*/

/*
There is a bug in the program bellow that prevents the factors of 21 from being displayed accurately. 
Try using different console.log() and/or debugger statements to spot the problem.
Tip: Go back to the Closures script in the Functions section
*/

var dividend = 21;
var numbers = [2, 3, 6, 7, 9, 11, 21];
var i;

for (i = 0; i < numbers.length; i++) {
  var factor;
  var divisor = numbers[i];

  if (dividend % divisor === 0) {
    factor = true;
  }

  if (factor) {
    console.log(divisor + ' is a factor of ' + dividend + '!');
  }
}

/*
See this sites for some debugging tricks in JavaScript: 
https://raygun.com/javascript-debugging-tips 
https://flaviocopes.com/javascript-debugging/
*/




