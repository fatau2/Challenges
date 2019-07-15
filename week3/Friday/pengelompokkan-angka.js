/*
 * Function takes in an array of numbers and put them in different
 * category depending on whether it is in the following order:
 * 1. divisible by three
 * 2. even and odd numbers not divisible by three
 *
 * @param arr Array
 */

function mengelompokkanAngka(arr) {
  	var resultList = [];
	var evenNumbers = [];
	var oddNumbers = [];
	var divisibleByThreeNumbers = [];
	var counter = 0;
	while (counter <= arr.length - 1){
		var modulus2 = arr[counter] % 2;
                var modulus3 = arr[counter] % 3;
		if (modulus3 == 0){
			divisibleByThreeNumbers.push(arr[counter]);
		}
		if (modulus2 == 0 && modulus3 !== 0){
                        evenNumbers.push(arr[counter]);
                }

		if (modulus2 !== 0 && modulus3 !== 0){
			oddNumbers.push(arr[counter]);
		}
		counter++;
	}
	resultList.push(evenNumbers, oddNumbers, divisibleByThreeNumbers);
	return resultList;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
