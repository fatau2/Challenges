function spliceThisOverwrite(array,addition,start){
    var newList = [];
    for (let i = 0; i < array.length; i++) {
        if (i < start){
            newList.push(array[i]);
        } else{
            for (let j = 0; j < addition.length; j++) {
                newList.push(addition[j]);
            }
            //break;
            
        }
    
        
    }
    return newList;
}

console.log(spliceThisOverwrite(["I", "you"], ["love", "sleeping"], 1)); //I love
console.log(spliceThisOverwrite(["You", "me"], ["love", "coding"], 1)); //You love