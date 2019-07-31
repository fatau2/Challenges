function splitThisArrayIntoListOfObjects(string,splitChar){
    var list = [];
    var splitWord = "";
    function splitThisIntoListOfString(string,splitChar){
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== splitChar){
                splitWord = splitWord + string[i];
            } else {
                list.push(splitWord);
                splitWord = "";
            }
        }
        list.push(splitWord);
        return list;
    }
    list = splitThisIntoListOfString(string,splitChar);
    //console.log(list);
    var listOfObjects = [];
    for (let i = 0; i < list.length; i++) {
        var wordObject = {};
        wordObject.word = list[i];
        listOfObjects.push(wordObject);
    }
    return JSON.stringify(listOfObjects);
}


console.log(splitThisArrayIntoListOfObjects("aku pasti bisa"," ")); //["aku","pasti","bisa"]