/**
 * Function converts array to object which stores a "total score" 
 * each object stores total score for each person
 */
function calculateTotalScore(array){
    var players = [];
    
    for (let i = 0; i < array.length; i++) {
        var player = {};
        var hasFound = false;
        player.name = array[i][0];
        player.score = array[i][1];
        for (let j = 0; j < players.length; j++) {
            if (players[j].name === player.name){
                players[j].score = players[j].score + 1; 
                hasFound = true;
            }
        }
        if(hasFound === false){
        players.push(player);
        }
    }
    return JSON.stringify(players,null,2);
}

console.log(calculateTotalScore([["Arby",1],["Ronald McDonald",1],["Lee Min Ho", 1],["Arby",1],["Ronald McDonald",1],["Arby",1]])); //[{name:Arby,score:3},{name:Ronald McDonald,score:2},{name:Lee Min Ho, score:1}]