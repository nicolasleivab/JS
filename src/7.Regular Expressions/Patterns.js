/* Repeating Parts of a Pattern */

/*
When you put a plus sign (+) after something in a regexp, it indicates that the element may be repeated
more than once.
*/

console.log(/'\d+'/.test("'1367'")); //->true
console.log(/'\d+'/.test("''"));    //->false

/*
Using * has a similar meaning but also allows the pattern to match zero times. It'll just match
zero instances if it can't find any suitable text to match
*/

console.log(/'\d*'/.test("'1367'")); //->true
console.log(/'\d*'/.test("''"));    //->true

//A question mark makes a part of the pattern 'optional'

let behaviour = /behaviou?r/;

console.log(behaviour.test('behaviour')); //->true
console.log(behaviour.test('behavior')); //->true

/*
To indicate that a pattern should occur a precise number of times, use braces.
You can also specify a range ({1, 5}), meaning the element must occur at least once and at most five times.
*/

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("11-11-2011 11:11")) //->true

/* Grouping Subexpressions */

//To use an operator like * or + on more than one element at a time, you have to use parentheses

let evilLaugh = /muaa+(haa+)+/i;
console.log(evilLaugh.test("Muaaaahaahaaahahaahaahaahaaaa")); //->true

/*
The first and second + characters apply only to the second a in muaa and haa respectively while the third +
applies to the whole group (haa+), matching one or more sequences like that.
The i at the end of the expression in the example makes this regular expression case insensitive.
*/