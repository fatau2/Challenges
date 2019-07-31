/**
 * Function takes in array of numbers, sort the list descending to find out which number is the biggest
 * @param {*} arrNumber Array 
 */
function sorting(arrNumber) {
    var loopCounter = 0;
    while (loopCounter !== arrNumber.length){
        for (let i = 0; i < arrNumber.length - 1; i++) {
            if (arrNumber[i] < arrNumber[i+1]){
                var temp = arrNumber[i];
                arrNumber[i] = arrNumber[i+1];
                arrNumber[i+1] = temp;
            }
        }
        loopCounter++;
    }
    return arrNumber;
  }
  
  /**
   * Function takes in array of numbers, calculates the number of occurence for each unique number
   * @param {*} arrNumber Array
   */
  function getTotal(arrNumber) {
    var counter = 1;
    var frequency = [];
    for (let i = 1; i < arrNumber.length; i++) {
         if (arrNumber[i] === arrNumber[i-1]){
             counter++;     
         } 
         if (arrNumber[i] !== arrNumber[i-1] || arrNumber[i+1] === undefined){
            frequency.push(counter);
            counter = 1;
         }
    }

    if (frequency[0] !== undefined){
        return "angka paling besar adalah " + arrNumber[0] + " dan jumlah kemunculan sebanyak " + frequency[0] + " kali";
    } else {
        return "''";
    }
  }
  
  /**
   * Function takes in array of number, finds out the frequency of the biggest number in the array
   * @param {*} arrNumber Array
   */
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  //console.log(sorting([1, 1, 1, 1]));
  //console.log(sorting([122, 122, 130, 100, 135, 100, 135, 150]));

  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''