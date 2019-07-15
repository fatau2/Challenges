
function manualSort(arr) {
    var counter = 0;
    var loopCounter = 1;
    console.log(arr.length);
    while (loopCounter !== arr.length[0] - 1){
        counter = 0;
        while (counter <= arr.length - 1){
            var secondCounter = 0;
            console.log(arr[counter].length);
            while (secondCounter <= arr[counter].length){
                if(arr[counter][secondCounter] > arr[counter][secondCounter + 1]){
                    var temp = arr[counter][secondCounter];
                    arr[counter][secondCounter] = arr[counter][secondCounter + 1];
                    arr[counter][secondCounter + 1] = temp;
                }
                secondCounter++;
            }  
        counter++;
        }
    loopCounter++;
    }
    return arr[0];
}



console.log(manualSort([[3, 4, 2], [5, 1, 6, 7]]));
/*
  [
    [2, 3, 4],
    [1, 5, 6, 7]
  ]
*/

//var arr = [[3, 4, 2], [5, 1, 6, 7]];
//console.log(arr.length);