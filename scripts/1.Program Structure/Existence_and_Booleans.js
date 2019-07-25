/* Existence and Booleans*/
//Using coercion to check the existence of a variable

var a;  //undefined, null and "" coerce to false

a = 0; //What about 0?

if (a){
	console.log("Something is there.") 
} 

/* 0 is coerced to false, which is a problem since 0 is not
necessarily lack of existence/

/* How to fix this,

if (a || a === 0){}   (check precendence and operators table) 

*/