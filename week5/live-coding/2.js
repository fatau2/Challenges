function warOfFun(informations) {
    var player = {};
    for (let i = 0; i < informations.length; i++) {
        console.log(informations[i]);
        for (let j = 0; j < informations[i].length; j++) {
            //console.log(informations[i][j]);
            player[informations[i][j]] = 0;
        }
    }
    return player;
  }
  
  console.log(warOfFun([
    ['andre', 'toni', 'toti'],
    ['risk', 'fun', 'go'],
    ['humble', 'psyhco', 'strong']
  ]))
  // pemenangnya adalah toni
  
 /*  console.log(warOfFun([
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