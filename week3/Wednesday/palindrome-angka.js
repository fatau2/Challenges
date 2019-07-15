/*
 * Return the next palindrome from parameter 'num'
 *
 * @param num int
 */
function angkaPalindrome(num) {
	var palindrome = 0;
	var hasFound = false;
	var numIncrement = num;
	if(num < 9){
		palindrome = num + 1;
	}
	while (hasFound == false) {
		numIncrement = numIncrement + 1;
		var numString1 = "" + numIncrement;
		var numString2 = "";
		var counter = numString1.length - 1;
		while(counter >= 0){
			numString2 = numString2 + numString1[counter];
			counter--;
		}
		if (numString1 == numString2){
			palindrome = numString2;
			//console.log(numString2);
                	hasFound = true;
		}
	}
	return palindrome;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
