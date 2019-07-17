/**
 * Function returns true if parameter is a prime number
 * and false if parameter is otherwise
 * 
 * @param angka int 
 */
function angkaPrima(angka) {
  	var isPrime = true;
	for (var i = 2; i<=Math.sqrt(angka);i++){
		if(angka % i === 0){
			isPrime = false;
		}
	}
	return isPrime;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(49)); // false
console.log(angkaPrima(811)); // true
console.log(angkaPrima(35)); // false
