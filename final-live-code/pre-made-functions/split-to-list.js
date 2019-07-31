function splitThisIntoListOfString(string,splitChar){
    var list = [];
    var splitWord = "";
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

console.log(splitThisIntoListOfString("aku pasti bisa"," ")); //["aku","pasti","bisa"]
console.log(splitThisIntoListOfString("aku&pasti&bisa",'&')); //["aku","pasti","bisa"]