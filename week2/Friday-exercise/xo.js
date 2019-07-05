function xo(str) {
  // you can only write your code here!
	var length = str.length;
        var counter = 0;
        var xCount = 0;
	var oCount = 0;
	while (counter <= length){
		if(str[counter] == "x"){
                	xCount = xCount + 1;
        	} else if(str[counter] == "o"){
			oCount = oCount + 1;
		}
	 counter++;
	}
	if(xCount == oCount){
		return true;
	} else {
		return false;
	}

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
