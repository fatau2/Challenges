function americanGotTalent(votes) {
    var counter = 0;
    var leeCounts = 0;
    var arbyCounts = 0;
    var darrenCounts = 0;
    while (counter <= votes.length -1){
        //console.log(votes[counter]);
        if(votes[counter] === "Lee Min Ho"){
            leeCounts++;
        }
        if(votes[counter]=== "Arby"){
            arbyCounts++;
        }
        if(votes[counter] === "Darren McFlurry"){
            darrenCounts++
        }
        counter++;

    }
    var scoreLists = [leeCounts,arbyCounts,darrenCounts];
    var name = "";
    var maxVote = ""
    var hasWinner = false;
    var congrats = "";
    if (scoreLists[0]> scoreLists[1] && scoreLists[0] > scoreLists[2]){
        name = "Lee Min Ho"
        maxVote = scoreLists [0];
        hasWinner = true;
    }
    if (scoreLists[1] > scoreLists[0] && scoreLists[1] > scoreLists[2]){
        name = "Arby";
        maxVote = scoreLists [1];
        hasWinner = true;
    }
    if (scoreLists[2] > scoreLists[0] && scoreLists[2] > scoreLists[1]){
        name = "Darren McFlurry";
        maxVote = scoreLists [2];
        hasWinner = true;
    }

    if (hasWinner){
        congrats = "selamat juaranya adalah " + name + ", dengan total votes yang diterima " + maxVote;
    } else{
        congrats = "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini";
    }
    return congrats;
  }
  
  console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho']));
  // Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2
  console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho']));
  // Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
  console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby']));
  // Selamat juaranya adalah Arby, dengan total votes yang diterima 2