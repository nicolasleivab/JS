/* (Fat) Arrow Functions */

var fn = (a, b) => a * b; 

console.log(fn(2,4));

/*
function fn(a, b){
	return a * b;
}
*/

setTimeout(() => console.log('Hi'), 1000);

/*
	setTimeout(function(){
	console.log('Hi')
	}, 1000);

*/
