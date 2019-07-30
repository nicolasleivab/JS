/* Array Loops */

/*
Consider the following list of costumers (array of objects).
We want to establish a correlation between the Region of the customers and the products they buy.
For doing this, we want build a table like this:

[targetRegion = false && product = false, targetRegion = false && product = true, 
targetRegion = true && product = false, targeRegion = true && product = true]

This table can be later used to calculate a correlation coefficient using a statiscal method such as phi coefficient.

Note: In the real world we would need a much bigger dataset to get a significant result, this is only
a working example.
*/

let costumers = [{
	ID: 0001,
	contact: 'costumer1@gmail.com',
	region: 'North',
	products: ['product 1', 'product 2', 'product 3']
},
{
ID: 0002,
contact: 'costumer2@gmail.com',
region: 'North',
products: ['product 2', 'product 4']
},
{
ID: 0003,
contact: 'costumer3@gmail.com',
region: 'South',
products: ['product 1', 'product 3', 'product 4']
},
{
ID: 0004,
contact: 'costumer4@gmail.com',
region: 'North',
products: ['product 1', 'product 2', 'product 3', 'product 4', 'product 5']
},
{
ID: 0005,
contact: 'costumer5@gmail.com',
region: 'South',
products: ['product 3', 'product 4', 'product 5']
},
{
ID: 0006,
contact: 'costumer4@gmail.com',
region: 'North',
products: ['product 1', 'product 2', 'product 3', 'product 4', 'product 5']
},
{
ID: 0007,
contact: 'costumer5@gmail.com',
region: 'South',
products: ['product 3', 'product 4', 'product 5']
}];

function tableFor(product, targetRegion, costumers){
	let table = [0, 0, 0, 0];  // Initialize our table
	for (let i = 0; i < costumers.length; i++){
		let properties = costumers[i], index = 0;
		if (properties.products.includes(product)) index += 1;  // if product = true then move 1 value to the right, else stay
		if (properties.region == targetRegion) index += 2;     // if targetRegion = true then move 2 value to the right, else stay
		table[index] += 1;                                // +1 to the table index of the current loop 
	}
	return table;
}

console.log(tableFor('product 1', 'North', costumers));

/*
Now it's possible to create a binding with the result of your table and use it as an input for a correlation coefficient function.
At this point, creating a function like this is fairly easy. The phi coefficient formula is shown in the link bellow:
https://www.statisticshowto.datasciencecentral.com/phi-coefficient-mean-square-contingency-coefficient/
*/



/* The for-of Loop*/

/*
There is also a shorter syntax for looping through arrays
*/


for (let costumersContact of costumers){   // Get ID and contact of each costumer
	console.log(`${costumersContact.ID +': '+ costumersContact.contact}`);
}

/*
We can use this method in the previous function:

function tableFor(product, targetRegion, costumers){
	let table = [0, 0, 0, 0];
	for (let costumersProp of costumers){
        let index = 0;
		if (costumersProp.products.includes(product)) index += 1;
		if (costumersProp.region == targetRegion) index += 2;
		table[index] += 1;
	}
	return table;
}

*/

