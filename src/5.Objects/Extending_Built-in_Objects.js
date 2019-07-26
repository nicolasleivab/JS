/* Extending Built-in Objects*/

class ConvertableArray extends Array {
    constructor(...nums) {
        super();
        this.nums = nums;
    }
 
    convert() {
        const numbers = this.nums;
        const returnArray = [];
        numbers.forEach(num => returnArray.push(`Converted! ${num}`));
        return returnArray;
    }
}
 
const numberArray = new ConvertableArray(1, 2, 3);
console.log(numberArray.convert());

/*
With subclassing you have the chance of changing the behaviour of built-in objects
*/




