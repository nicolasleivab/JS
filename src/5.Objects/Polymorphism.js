/* Polymorphism */

class Pokemon {
    constructor (name, type, hp){
        this.name = name;
        this.type = type;
        this.hp = hp;
    }
    attack (){
        console.log(`${this.name} used tackle`)
    }
}

class WaterPokemon extends Pokemon {
    attack (){
        console.log(`${this.name} used tackle`) //commnet attack(){} function out and see what happens
    }
}

let eevee = new Pokemon('Eevee', 'Normal', 80)
let squirtle = new WaterPokemon('Squirtle', 'Water', 100);

console.log(squirtle.hp);
console.log(eevee.hp);

console.log(squirtle.attack());
console.log(eevee.attack());

/*
If one subclass doesn't have a method the parent class is checked in order
to find the method and call it as it was originally.
Typing the same method in a subclass with a different affect will overwrite the method
only in the current object.
*/
