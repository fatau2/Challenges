function splitThisIntoString(string,splitChar){
    //var list = [];
    var splitWord = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== splitChar){
            splitWord = splitWord + string[i];
        }
    }
    return splitWord;
}

console.log(splitThisIntoString("aku pasti bisa"," ")); //"akupastibisa"
console.log(splitThisIntoString("aku&pasti&bisa",'&')); //"akupastibisa"