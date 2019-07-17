/**
 * Function returns the largest common denominator for angka1 and angka2
 * 
 * @param angka1 int
 * @param angka2 int
 */
function fpb(angka1, angka2) {
  	var firstFactors = [];
	var secondFactors = [];
	for(var i = 0; i<=angka1; i++){
		if(angka1 % i === 0){
			firstFactors.push(i);
		}
	}
	for(var i = 0; i<=angka2; i++){
		if(angka2 % i === 0){
			secondFactors.push(i);
		}
	}
	for(var i = firstFactors.length -1; i >= 0; i--){
		for(var j = secondFactors.length - 1; j >=0; j--){
			if (firstFactors[i]===secondFactors[j]){
				return secondFactors[j];
			}
		}
	}
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1);
	