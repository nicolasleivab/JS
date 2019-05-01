/* Destructuring Arrays*/

let sample = [4, 7, 12, 32, 'string'];

let [a, b, ...c] = sample; //Using rest operator to get the missing values

console.log(c);
//console.log(sample);

let [d = 'Default', e, f, g, h, i = 'Default'] = sample;  //You can set default values

console.log({d, i});   //What do you think this will print?
//console.log(sample); //You can check if the array has been changed


//Swapping Values

let x = 3;
let y = 6;

[y, x] = [x, y];
console.log({x, y});

//Immediately destructuring an array

let [j, , k] = [2, 11, 33];

console.log({j, k}); //What will this return? what did we do differently?

/*
We can't use that syntax in destructuring objects (j, , k), because
we are referencing them by name, not by position.
*/