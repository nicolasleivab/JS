
/* (Fat) Arrow Functions */

var fn = (a, b) => a * b; 

console.log(fn(2,4));

/*
same as:
function fn(a, b){
	return a * b;
}
*/

setTimeout(() => console.log('Hi'), 1000);

/*
same as:
	setTimeout(function(){
	console.log('Hi')
	}, 1000);

*/

var button = document.querySelector('button');

function fn2() {
	console.log(this);
}

var fn3 = () => console.log(this);

button.addEventListener('click', fn2); //Try fn2 and then fn3 to see the differences

/* Why fn2 refers to the html button element and fn3 to the window object?
The fat arrow function keeps its context, you won't need call(), apply(), bind()
or others to find a workaround to keep 'this' to the right execution context */