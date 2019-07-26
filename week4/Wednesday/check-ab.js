/**
 * Function takes in a sentence, checks if it contains the letter 'a' and 'b'
 * calculate the distance between 'a' and 'b'
 * If the distance is less or equal to 3 return true otherwise false
 * @param num 
 */

function checkAB(num) {
    var aPosition = 0;
    var bPosition = 0;
    var spaceCount = 0;
    for (let i = 0; i < num.length; i++) {
        if(num[i] === 'a'){
        aPosition = i;
        }
        if(num[i] === 'b'){
            bPosition = i;
            }
        if(num[i] === " " && num[i] < bPosition){
            spaceCount = spaceCount + 1;
        }
        
    }
    return ((bPosition - aPosition) - spaceCount);
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  /* console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
 */