/*
 * Find the largest pair of numbers
 *
 * @param num int
 */
function pasanganTerbesar(num) {
  	var numString = "" + num;
 	var terminus = numString.length - 2;
  	var counter = 0;
	var pairs = [];
	while (counter <= terminus){
		pairs.push(parseInt(numString.substring(counter,counter+2)));
		counter++;
	}
	return pairs.sort().pop();

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
