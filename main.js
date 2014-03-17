//http://winter2014.refactoru.com/exercises/problem-set/function-practice2

//9) Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.

//9a) or([false, false, true, false]) should return true
//9b) or([false, false, false]) should return false
//9c) or([]) should return false

var or = function(userArr) {
	var i;
	var l = userArr.length
	for(var i=0; i<l; i++) {
		if(userArr[i]) {
			return true;
		}
	}
	return false;
}

console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([]));

