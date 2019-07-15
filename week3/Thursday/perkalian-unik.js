/*
 * For each element in the list multiply all values in the list 
 * except for the current element, put them in a new list, returns the new list
 *
 * Algorithm
 * 1. READ a list "arr"
 * 2. MULTIPLY all values in the array except for the current one
 *
 * @param arr Array
 */

function perkalianUnik(arr) {
	var counter = 0;
	var multipliedList = [];
	while (counter <= arr.length - 1){
		var secondCounter = 0;
		var total = 1;
		var matchHasPassed = false;
		while (secondCounter !== arr.length){
			if(arr[secondCounter] === arr[counter] && !matchHasPassed){
				matchHasPassed = true;
			}
			else{
				total = total * arr[secondCounter];
			}
			secondCounter++;
		}
		multipliedList.push(total);
		counter++
	}
	return multipliedList;	
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
