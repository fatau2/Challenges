/*
 * Check word if word is a palindrome
 * @param word String
 */

function palindrome(word) {
	var reversed = "";
	counter = word.length - 1;
	while (counter >= 0){
		reversed = reversed + word[counter];
		//console.log(reversed);
		counter--;
	}
	//console.log(reversed);
	if(word === reversed){
		return true;
	} else {
		return false;
	}
	
}
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

