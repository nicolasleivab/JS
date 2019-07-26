/* Control Flow and Conditional Execution */

// Statements are excuted from top to bottom in your program

let x = 1;       //Example of a straight-line control flow
let y = x + 2;

let yourName = prompt("What's your name?");           
if (Number.isNaN(Number(yourName))){   // Conditional Execution, example of a branching road control flow
    console.log('The third letter of your name is ' + yourName[2]);  // string[N] to access letters of string
}
else {
    console.log('Please write a word')   // In this example Number.isNaN will only return true if the input is
                                         // not a number. Number(yourName) because prompt converts to string
}
/*
It's possible to chain executional paths by adding else if statements
*/

/* Loops */

/*
You can have a loop control flow for programs that need iteration.
This can be achieved by using while, do while or for loops.
*/

let i = 0;                    // Try these 3 different programs, do they show the same results? Why?
while(i < 100){
    i++;
    console.log(i);
}


let c = 0;
do{
    c++;
    console.log(c);
} while (c < 100);


for(n = 0; n < 100; n++){
    console.log(n);
}

/*
While loops vs for loops
https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript
*/