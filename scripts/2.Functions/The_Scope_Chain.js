/* Scope Chain exercise, chose one scenario and comment out the other ones 
to understand how scope chain and the reference to the outter environment affects 
your code depending on the lexical location of your functions and variables*/

// 1st scenario

function b() {
	var myVar;
	console.log(myVar); //What will console.log(myVar) print? a) 1, b) 2 or c) undefined
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();

//--------------------------------------------------------------------

// 2nd scenario
/*
function b() {
	console.log(myVar); //What will console.log(myVar) print? a) 1, b) 2 or c) undefined
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();
*/

//--------------------------------------------------------------------

// 3rd scenario 
/*
function a() {

	function b() {
	console.log(myVar); //What will console.log(myVar) print? a) 1, b) 2 or c) undefined
}

	var myVar = 2;
	b();
}

var myVar = 1;
a();
//b(); bonus, what do you think will happen if you call function b in the global environment?
*/

//--------------------------------------------------------------------

// 4th scenario
/*
function a() {

	function b() {
	console.log(myVar); //What will console.log(myVar) print? a) 1, b) 2 or c) undefined
}

	b();
}

var myVar = 1;
a();
*/