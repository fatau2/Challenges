/*
 * Function that checks the nearest distance between element 'x' and 'o'
 *
 * @param arr Array
 */

function targetTerdekat(arr) {
  	var counter = 0; 
	var oPosition = 0;
	var xPositions = [];
	var xFound = false;
	while(counter <= arr.length - 1){
		if(arr[counter] === "o"){
			oPosition = counter;
		}
		if(arr[counter] === "x"){
			xPositions.push(counter);
			xFound = true;
		}
		counter++;
	}
	var secondCounter = 0;
	var distance = 0;
	var distanceList = [];
	
	if(xFound){
		while(secondCounter <= xPositions.length - 1){
			distance = xPositions[secondCounter] - oPosition;
			if (distance < 0){
				distanceList.push(distance * -1);
			} else{
				distanceList.push(distance);
			}
			secondCounter++;
		}
		distanceList.sort();
		return distanceList[0];
	} else {
		return 0;
	}
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
