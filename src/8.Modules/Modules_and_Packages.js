/* Modules */

/*
A module is a piece of program that specifies which other pieces it relies on and which 
functionality it provides to other modules.
Modules interfaces and object interfaces have a lot in common. They help you to make some parts 
of the module available to the exterior while keeping the rest private.
This allow pieces to interact with each other through well-defined connectors, avoiding unwanted
interactions and entaglement. The relations between modules are called dependencies.

In order to separate modules, each of them needs its own private scope. Putting the code in different
JavaScript files doesn't do the trick since the files still share the same global namespace and can
accidentally or intentionally interefere with each other's binding. (Different methods are presented 
later in this section)
*/


/* Packages */

/*
Once you start building programs out of separate pieces while being actually able to run those pieces
on their own, is when you can start to apply these same pieces in different programs avoiding duplication of
work. This trait is considered one of the main advantages of building programs this way.

Imagine you have a function you want to use in another program, so you just copy the necessary code to 
make the new program work. Then you find out an error in your function and proceed to fix it in the current
program but you forget to fix it in the original one. If you accumulate this in time you'll find yourself wasting
a lot of time moving copies around and keeping them up to date.
That's where packages come handy, which are a chunk of code that can be distributed and have their own documentation 
about modules and dependencies. So when an error is found in a package or a new feature is added, the package
can be updated and the programs that depend on it can upgrade to the new version.

However, working this way requires infraestructure. A place to store and find places as well as a convenient
way to install/upgrade them is needed. For JavaScript, this infraestructure is provided by NPM (https://npmjs.org).
You can find a beginners guide to npm here: https://www.sitepoint.com/beginners-guide-node-package-manager/
*/


/* Improvised Modules */

/*
Before 2015, JavaScript didn't have a built-in module system. Yet people had been building large systems
for more than a decade so they needed modules anyways and they designed them on top of the language.
For this matter, you can use functions to create local scopes and objects to represent module interfaces.
Two easy ways for creating modules in ES5 are presented
*/

//IIFE 

(function(){
    var private = 'test'
    console.log(private);
  })()

/*
As presented in the functions section, IIFEs allows us to encapsulate code (often complex) inside the function 
and define variables that don't interfere with the global scope. Try calling the var private after the IIFE.
This is how most of the libraries were made.
However, IIFEs don't provide a mechanism for dependancy management.
*/


//Revealing Module pattern

// Expose module as global variable
var module = function(){

    // Inner logic
    function defineVar(){
      var private = 'test'
      console.log(private);
    }
  
    // Expose API
    return {
      defineVar: defineVar
    }
  }()


//Similar to an IIFE but we assign the return value to a variable

module.defineVar(); //we access the public API as we do when calling methods

//As with IIFEs this way doesn't provide a mechanism for dependancy management.
