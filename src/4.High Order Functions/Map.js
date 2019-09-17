/* map() */

let pokemons = [{name: 'Pikachu', type: 'electric'}, {name: 'Charmander', type: 'fire'}, {name: 'Squirtle', type: 'water'},
{name: 'Bulbasaur', type: 'grass'}, {name: 'Magikarp', type: 'water'}, {name: 'Psyduck', type: 'water'},
{name: 'Rapidash', type: 'fire'}, {name: 'Oddish', type: 'grass'}, {name: 'Electabuzz', type: 'electric'}];

let pokemonNames = pokemons.map(pokemon => pokemon.name);
console.log(pokemonNames);

/*
map() method transforms an array, it builds a new array by applying a function to all of its elements
and then creating a new array with the returned values. The new array has the same length but different content
*/

//We can also write this function like this:

function mapArray(array, select){
    let mappedArray = [];
    for(let element of array){
        mappedArray.push(select(element));
    }
    return mappedArray;
}

console.log(mapArray(pokemons, pokemon => pokemon.name));