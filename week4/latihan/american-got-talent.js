function americanGotTalent(votes) {
        var contestants = {};
        for (let i = 0; i < votes.length; i++) {
            if (contestants[votes[i]] === undefined){
                contestants[votes[i]] = 1;
            }
            else {
                contestants[votes[i]] = contestants[votes[i]] + 1;
            }
        }
        var maxCount = 0;
        for (let j = 0; j < Object.values(contestants).length; j++) {
            if (Object.values(contestants)[j] > maxCount){
                maxCount = Object.values(contestants)[j];
            }  
        }
        var winner = [];
        for (let k = 0; k < Object.keys(contestants).length; k++) {
            if (contestants[Object.keys(contestants)[k]] === maxCount){
                console.log(Object.keys(contestants)[k]);
                winner.push(Object.keys(contestants)[k]);
            }  
        
            
        }
        if (winner.length > 1){
            return "juara tidak dapat ditentukan"
        } else {
            return "juara adalah " + winner[0] + " dengan perolehan suara: " + maxCount;
        }
        //console.log(winner);
        //return JSON.stringify(maxCount);
        //return JSON.stringify(contestants, null, 2);
  }
  
  console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho', 'Arby']));
  // Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2
  //console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho']));
  // Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
  //console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby']));
  // Selamat juaranya adalah Arby, dengan total votes yang diterima 2