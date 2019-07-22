/**
 * Pseudocode
 * READ "stringData" as parameter
 * CREATE an array "arrayData" on the split parameter based on the symbol ","
 * CREATE a multidimensional array "arrayData2" by splitting "arrayData" based on the symbol ":"
 * CREATE "minScore" to store the buyer with the minimum budget, set the initial value to zero
 * CREATE "maxScore" to store the buyer with the biggest budget, set the initial value to zero
 * FOR each of the element in the "arrayData2" 
 *      IF the element's budget > "maxScore"
 *          "maxScore" = element's budget
 * SET the "minScore" value to the final "maxScore"
 * FOR each of the element in the "arrayData2" 
 *      IF the element's budget < "minScore"
 *          "minScore" = element's budget
 * CREATE "minName" to store the buyer's name with the minimum budget, set the initial value to empty String
 * CREATE "maxName" to store the buyer's name with the biggest budget, set the initial value to empty String
 *  FOR each of the element in the "arrayData2" 
 *      IF the element's budget = "minScore"
 *          SET the "minName" as the name of the buyer who has the budget of the "minScore"
 *      IF the element's budget = "maxScore"
 *          SET the "maxName" as the name of the buyer who has the budget of the "maxScore"
 * IF "stringData" is empty
 *      RETURN empty message
 * ELSE 
 *      RETURN the name of who has the minimum budget "minName" and who has the maximum budget "maxName"
 *  
 * @param {*} stringData 
 */

function eMoneySplit(stringData) {
    var arrayData = stringData.split(",");
    
    var arrayData2 = [];
    for (let i = 0; i < arrayData.length; i++) {
        arrayData2.push(arrayData[i].split(":"));
        
    }
    //console.log(JSON.stringify(arrayData2, null,2));

    var minScore = 0;
    var maxScore = 0;
    for (let i = 0; i < arrayData2.length; i++) {
        //console.log(JSON.stringify(arrayData2[i][1], null,2));
        if(parseInt(arrayData2[i][1]) > maxScore){
            //console.log(arrayData2[i][1]);
            maxScore = arrayData2[i][1];
            }   
        }
    minScore = maxScore;
    for (let i = 0; i < arrayData2.length; i++) {          
        if(parseInt(arrayData2[i][1]) < minScore){
            //console.log(arrayData2[i][1]);
            minScore = arrayData2[i][1];
        }
    }
    var nameMax = "";
    var nameMin = "";
    for (let i = 0; i < arrayData2.length; i++) {          
        if(arrayData2[i][1] === minScore){
            nameMin = arrayData2[i][0];
        }
        if(arrayData2[i][1] === maxScore){
            nameMax = arrayData2[i][0];
        }
    }
        //return (maxScore + " " + nameMax + " " + minScore + " " + nameMin);
    if(!stringData){
        return "tidak ada catatan eMoney";
    } else {
        var message = "terbanyak adalah " + nameMax + " dan tersedikit adalah " + nameMin;
        return message;
    }
}

        

  
  
  console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
  // terbanyak adalah bagas dan terdikit adalah andre
  console.log(eMoneySplit('andre:50000'))
  // terbanyak adalah andre dan terdikit adalah andre
  console.log(eMoneySplit(''))
  // tidak ada catatan eMoney