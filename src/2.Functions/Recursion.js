/* Recursion */

/*
A recursive function is a function that calls itself
*/

function factorial(n){               // Example functon of a factorial
    if (n <= 0){
        return 1;
    }
    return (n * factorial(n - 1));   // The function calls itself until it breaks the condition
                                     // Note that you can skip using 'else' and just type the else statement after the if
}                              

console.log(factorial(7));

/*
Unfortunately, this kind of implementation in JavaScript has a performance problem, it's
about three times slower than a looping version. Running through a loop is generally cheaper
than a recursive function.
*/

function factorialLoop(n){          //This is the looping version of the same function
    let result = 1;
    for(let i = n; i > 1; i--) {
        result *= i; 
    }
    return result
}

console.log(factorialLoop(7));


/*
However, recursion is not always just an inefficient alternative to looping. There are some
problems that are easier to solve with recursion, more complex problems that require processing
several branches like the example bellow:
*/

/*
Create a function that, given a target number, can find a solution that starting from 1 can reach 
the target with a sequence of either adding 3 or multiplying by 2.
*/

function findSolution(target){
    function repeat(present, history){   //Note that this is the recursive function
        if(present == target){
            return history;
        } else if (present > target) {
            return null; 
        }
        return repeat(present + 3, `(${history} + 3)`) || repeat(present * 2, `(${history} * 2)`);
    }
return repeat(1, '1');
}

console.log(findSolution(11));

/*
In order to understand this function, a diagram of the recursive function calls is shown bellow:

repeat(1, '1')
    repeat(4, '(1 + 3)')
        repeat(7, '((1 + 3) + 3)')
            repeat(10, '(((1 + 3) + 3) + 3)')
                repeat(13, '((((1 + 3) + 3) + 3) + 3)')
                    larger than target
                repeat(20, '((((1 + 3) + 3) + 3) * 2)')
                    larget than target
            repeat(14, '(((1 + 3) + 3) * 2)')
                larget than target
        repeat(8, '((1 + 3) * 2)')
            repeat(11, '(((1 + 3) * 2) + 3)')
                return history

The function will return null if no solution can be found by any combination of sequences
*/


