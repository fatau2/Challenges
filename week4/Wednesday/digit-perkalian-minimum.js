/**
 * Function takes in a number, finds the number's factors
 * return the minimum length of the number's factors
 *  
 * @param angka int 
 */
function digitPerkalianMinimum(angka) {
    var listOfFactors = [];
    for(var i = 1; i <= angka ; i++){
        for(var j = 1; j <= angka ; j++){
            if(i*j == angka){
                temp = i+ "" + j;
                listOfFactors.push(temp);
            }
        }
    }
    var loopCounter = 1;
    while (loopCounter !== listOfFactors.length){
        for(var i = 0; i < listOfFactors.length -1; i++){
            if (listOfFactors[i].length > listOfFactors[i + 1].length){
                temp = listOfFactors[i];
                listOfFactors[i] = listOfFactors[i+1];
                listOfFactors[i+1] + temp;
            }
        }
        loopCounter++;
    }
    return listOfFactors[0].length;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2