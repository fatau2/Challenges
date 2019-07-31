function sliceThis(string, start, end){
    string = string.toString();
    var sliced = "";
    for (let i = 0; i < string.length; i++) {
        if (i >= start && i < end){
            sliced = sliced + string[i];
        } 
    }
    return sliced;
}

console.log(sliceThis("splice me", 2, 8)); //lice m
console.log(sliceThis("123456789", 2, 8)); //345678