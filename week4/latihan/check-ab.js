/**
 * Function takes in a sentence, checks if it contains the letter 'a' and 'b'
 * calculate the distance between 'a' and 'b'
 * If the distance is less or equal to 3 return true otherwise false
 * @param num 
 */

function checkAB(num) {
    var aPosition = [];
    var bPosition = [];
    var distance = [];
    var hasFoundAB = false;
    var newNum = "";
    //delete space between words
    for(var i = 0; i <num.length; i++)
    {
        if(num[i] !== " "){
            newNum = newNum + num[i];
        }
    }
    //determine 'a' and 'b' positions
    for(var i = 0; i < newNum.length; i++){
        if(newNum[i] === 'a'){
            aPosition.push(i);
        }
        if(newNum[i] === 'b'){
            bPosition.push(i);
        }      
    }
    //determine the distance between 'a' and 'b'
    if(aPosition.length > 0 && bPosition.length > 0){
        hasFoundAB = true;
        for(var i = 0; i < aPosition.length; i++){
            for(var j = 0; j < bPosition.length; j++){
                var temp = aPosition[i] - bPosition[j];
                if (temp < 0){
                    distance.push(temp*-1);
                } else{
                    distance.push(temp);
                }
            }
        }
        //sort the list of distances ascending
        var loopCounter = 0;
        while (loopCounter !== distance.length){
            for(var i = 0; i < distance.length -1; i++){
                if(distance[i] > distance[i + 1]){
                    var temp = distance[i];
                    distance[i] = distance[i+1];
                    distance[i+1] = temp;
                }
            }
        loopCounter++;
        }
    }
    //returns true if the closest distance is less or equal to 3
    if(distance[0] > 3 || hasFoundAB == false){
        return false;
    } else{
        return true;
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // true
