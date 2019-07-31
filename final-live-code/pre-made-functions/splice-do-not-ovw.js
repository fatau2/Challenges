function spliceThisOverwrite(array,addition,start){
    var newList = [];
    for (let i = 0; i < array.length; i++) {
        if (i < start){
            newList.push(array[i]);
        } else{
            for (let j = 0; j < addition.length; j++) {
                newList.push(addition[j]);
            }   
        }
    }
    for (let i = start; i < array.length; i++) {
        newList.push(array[i]);
    }
    return newList;
}

console.log(spliceThisOverwrite(["I", "you"], ["love", "sleeping"], 1)); //I love sleeping you
console.log(spliceThisOverwrite(["You", "me"], ["love", "coding"], 1)); //You love coding me