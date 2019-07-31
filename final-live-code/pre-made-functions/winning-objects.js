function whoWins(arrayOfObjects){
    function sortThisAscending(list){
        console.log(list.length);
        var loopCounter = 0;
        while (loopCounter !== list.length){
            for (let i = 0; i < list.length - 1; i++) {
                if (list[i].score < list[i+1].score) {
                    var temp = list[i];
                    list[i] = list[i+1];
                    list[i+1] = temp;
                }
            }
            loopCounter++;
        }
        return list;
    }
    var scores = sortThisAscending(arrayOfObjects);
    return JSON.stringify(scores,null,2);
    //return arrayOfObjects[0].score;
}

console.log(whoWins([{
    "name": "Arby",
    "score": 2}, 
    {"name":"Lee Min Ho",
    "score":4},
    {"name":"Ronald McDonald",
    "score":3}])); //[{name:Lee Min Ho}, {name:Ronald McDonald}, {name:Arby}]