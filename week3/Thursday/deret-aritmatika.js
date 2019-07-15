/*
 * Function returns true if there is an incremental pattern
 * (incremented by the same amount) between its elements
 *
 * @param arr Array
 */

function tentukanDeretAritmatika(arr) {
        var counter = 1;
	isDeretAritmatika = true;
        while(counter <= arr.length - 2){
                var firstIncrement = arr[counter] - arr[counter - 1];
		var secondIncrement = arr[counter + 1] - arr[counter];
		if (secondIncrement !== firstIncrement){
			isDeretAritmatika = false;
		}
                counter++;
        }
        return isDeretAritmatika;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
