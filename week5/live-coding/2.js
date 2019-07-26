function warOfFun(informations) {
    var player = {};
    var funCount = 0;
    var maxFunCount = 0;
    var winner = [];
    if (informations.length !== 0){
        //Creating player objects with their names as keys and their funcount as values for the keys
        for (let i = 0; i < informations[0].length; i++) { 
            funCount = 0;
            for (let j = 1; j < informations.length; j++) {
                if (informations[j][i] === "fun"){
                    funCount = funCount + 1;
                }
            }
            player[informations[0][i]] = funCount;
        }
        //get the maximum funCOunt
        for (let i = 0; i < Object.values(player).length; i++) {
            if (Object.values(player)[i] > maxFunCount){
                maxFunCount = Object.values(player)[i];
            }    
        }

        //get WHO has the maximum funCOunt
        for (let i = 0; i < Object.keys(player).length; i++) {
            if (Object.values(player)[i] === maxFunCount){
                winner.push(Object.keys(player)[i]);
            }    
        }
    }
    //COnditionals for determining winner or ties
    if(winner.length > 1 || winner.length == 0){
        return "mohon maaf tidak ada pemenangnya";
    } else {
        return "pemenangnya adalah " + winner[0];
    }
  }
  
   console.log(warOfFun([
    ['andre', 'toni', 'toti'],
    ['risk', 'fun', 'go'],
    ['humble', 'psyhco', 'strong']
  ]))
  // pemenangnya adalah toni 
  
    console.log(warOfFun([
    ['andre', 'toni', 'toti', 'tito'],
    ['fun', 'fun', 'fun'],
    ['fun', 'fun'],
    ['nonfun', 'fun', 'fun', 'fun']
  ]))
    // pemenangnya adalah toni 
  
   console.log(warOfFun([
    ['andre', 'toni'],
    ['risk', 'go'],
    ['humble', 'strong']
  ]))
  // mohon maaf tidak ada pemenangnya
  
  console.log(warOfFun([]))
  // mohon maaf tidak ada pemenangnya */ 