var multiarray = [[1,2,3],[4,5,6],[7,8,9]];

//console.log(multiarray[2][1]);

// TEST LATIHAN 1

function manualSort(arr) {
  var counter = 0;
  var loopingCounter = 1;
  //var swapped = false;
  while (loopingCounter !== arr.length -1){
      var counter = 0;
        while (counter <= arr.length - 2){
            //console.log(swapped);
            if(arr[counter] > arr[counter + 1]){
                var temp = arr[counter];
                arr[counter] = arr[counter + 1];
                arr[counter + 1] = temp;
            }
            counter++;
        }
        loopingCounter++;
    }
  return arr;
}

console.log(manualSort([3, 4, 2, 1, 5, 6, 7]));
// [1, 2, 3, 4, 5, 6, 7]

