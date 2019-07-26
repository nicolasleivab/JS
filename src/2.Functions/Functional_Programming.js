/* Functional Programming*/

function mapForEach(arr, fn) {

	var myArr = [];
	for (var i = 0; i < arr.length; i++){
		myArr.push(
			fn(arr[i])
		)
	};

	return myArr;
}

var arr1 = [1, 2, 3]

var checkPastLimit = function(limiter , item){
	return item > limiter;
}

//How can we pass i to item and preset limiter

var arr2 = mapForEach(arr1, checkPastLimit.bind(this, 'Set any value'));
console.log(arr2);

//How can we wrap this into a function that just takes the limiter as parameter

var checkPastLimitSimplified = function(limiter) {
	return function(limiter, item) {
		return item > limiter;
	}.bind(this, limiter);
};

var arr3 = mapForEach(arr1, checkPastLimitSimplified('Set any value'));
console.log (arr3);







