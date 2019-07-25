/* Empty Values */

/*
There are two special values, null and undefined, that are used to denote absence of a 'meaningful value'.
The difference between these two is minimum in most cases and is the consequence of a JavaScript design accident.
*/


typeof(null);      
typeof(undefined); //Should these two values share the same type?

typeof(null)===Object; //This is considered a JS bug, typeof(null) suggests that null is and object when in reality is a primitive value

//For more information about this go to: https://stackoverflow.com/questions/18808226/why-is-typeof-null-object


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