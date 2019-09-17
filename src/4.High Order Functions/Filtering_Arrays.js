/* High Order Functions */

/*
Higher-order functions are functions that operate on other functions by
taking them as arguments or returning them
More importantly, this kind of functions allow us to abstract over actions.
*/

let myArr = [0, 1, 3, 5];
let copiedArr = [];

myArr.forEach(n => copiedArr.push(n)); // for Each is a built in array method
console.log(copiedArr);                // for looping with a high order func


/* Filtering Arrays */

let pokemons = [{name: 'Pikachu', type: 'electric'}, {name: 'Charmander', type: 'fire'}, {name: 'Squirtle', type: 'water'},
{name: 'Bulbasaur', type: 'grass'}, {name: 'Magikarp', type: 'water'}, {name: 'Psyduck', type: 'water'},
{name: 'Rapidash', type: 'fire'}, {name: 'Oddish', type: 'grass'}, {name: 'Electabuzz', type: 'electric'}];

let waterPokemons = pokemons.filter(pokemon => pokemon.type == 'water');
console.log(waterPokemons);

/*
filter() is a standard built in array method, like forEach, that creates a new array with elements that fall
under a given criteria or that pass a certain 'test' from an existing array
*/


//We could also write this function like this:

function filterArray(array, condition){
    let filteredValues = [];
    for (let element of array){
        if (condition(element)){
            filteredValues.push(element);
        }
    }
    return filteredValues;
}

console.log(filterArray(pokemons, pokemon => pokemon.type == 'water'))

