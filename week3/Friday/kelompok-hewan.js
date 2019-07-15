/**
 * Function takes in an array of animals, put them in a list
 * according to their initial
 * 
 * @param animals array
 */
function groupAnimals(animals) {	
	var loopCounter = 1;
	while (loopCounter !== animals.length){
		var counter = 0;
		while(counter < animals.length - 1){
			if(animals[counter][0] > animals[counter + 1][0]){
				var temp = animals[counter];
				animals[counter] = animals[counter + 1];
				animals[counter + 1] = temp;
			}
		counter++
		}
	loopCounter++;
	}
	var animalsAlphabeticallyArranged = [];
	var counter = 0;
	while(counter <= animals.length - 1){
		var tempArray = [];
		tempArray.push(animals[counter]);
		if(animals[counter + 1] !== undefined){
			if(animals[counter][0] === animals[counter + 1][0]){
				tempArray.push(animals[counter + 1]);		
				counter++;
			} 
		}
	animalsAlphabeticallyArranged.push(tempArray);
	counter++;
	}
	return animalsAlphabeticallyArranged;
}


// TEST CASES
//console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
