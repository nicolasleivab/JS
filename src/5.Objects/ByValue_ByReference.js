/* By Value vs By Reference*/

let primitiveValue1 = 0;
let primitiveValue2;

primitiveValue2 = primitiveValue1; //Value copied (0) 
primitiveValue1 = 1;  //Will the value of primitiveValue 2 be affected?

console.log({primitiveValue1, primitiveValue2});

/* By Value
For primitive values, everytime we assign a value to a
variable a new space in memory is set (new address).
*/

let object1 = {value : 0};
let object2;

object2 = object1;
object1.value = 1;

console.log({object1, object2});

/* By Reference
For objects (functions included), assigning a new value
to referenced objects doesn't set up new space in memory
*/

object1 = {value: 11}; //What do you think will happen now?

console.log({object1, object2}); 

// equals operator sets up new memory space ( a new address)

