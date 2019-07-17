/**
 * Function returns the most frequently repeated number in the array
 * 1. If no number in the array has been repeated more than once return -1
 * 2. If the elements in the array consist of one number return -1
 * 3. If the frequency is tied between unique numbers then choose the number
 * which appeared first in the array
 * 
 * @param {} arr Array
 */
function cariModus(arr) {
	var objects = [];
  	for(var i = 0; i < arr.length; i++){
		var count = 0;
		for(var j = 0; j < arr.length; j++){
			if(arr[i] == arr[j]){
				count++;
			}
		}
		var pair = {
			"number" : arr[i],
			"count" : count
		};
		objects.push(pair);
	}
	var loopCounter = 1;
	while (loopCounter !== objects.length){
		for(var i = 0; i < objects.length - 1; i++){
			if(objects[i].count < objects[i+1].count){
				var temp = objects[i];
				objects[i] = objects[i+1];
				objects[i+1] = temp;
			}
		}
		loopCounter++;
	}
	if(objects[0].count == 1 || objects[0].count == objects.length){
		return -1;
	} else {
	return objects[0].number;
	}
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
