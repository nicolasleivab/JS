/* Closures and Callbacks*/

function timer() {

	var message = '3 seconds have passed!'

	setTimeout(function(){

			alert(message);

    }, 3000);
}

timer();

/*
Callback function: A function you give to another function,
to be run when the other function is finished.

In this case, the function goes up the scope chain and access the variable 
message that's still available 3 seconds later because of closure.



// For more info check https://stackoverflow.com/questions/2070275/what-are-closures-and-callbacks




