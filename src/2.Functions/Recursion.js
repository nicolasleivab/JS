/* Recursion */

/*
A recursive function is a function that calls itself
*/

function factorial(n){               // Example functon of a factorial
    if (n <= 0){
        return 1;
    }
    return (n * factorial(n - 1));   // The function calls itself (like in a loop) until it breaks the condition
                                     // Note that you can skip using 'else' and just type the else statement after the if
}                              

console.log(factorial(6));
