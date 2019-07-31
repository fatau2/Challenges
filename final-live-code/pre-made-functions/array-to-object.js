function convertArrayToArrayOfObjects(array){
    var players = [];
    for (let i = 0; i < array.length; i++) {
        var player = {};
        player.name = array[i][0];
        player.age = array[i][1];
        players.push(player);
    }
    return JSON.stringify(players,null,2);
}

console.log(convertArrayToArrayOfObjects([["Arby",25],["Ronald McDonald",40],["Lee Min Ho", 34]])); //[{name:Arby,age:25},{name:Ronald McDonald,age:40},{name:Lee Min Ho, age:34}]