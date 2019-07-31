function sortThisAscending(list){
    var loopCounter = 0;
    while (loopCounter !== list.length){
        for (let i = 0; i < list.length - 1; i++) {
            if (list[i] < list[i+1]) {
                var temp = list[i];
                list[i] = list[i+1];
                list[i+1] = temp;
            }
        }
        loopCounter++;
    }
    return list;
}

console.log(sortThisAscending([4,7,4,5,2])); //[7,5,4,4,2]
console.log(sortThisAscending([8,7,9,3,0])); //[9,8,7,3,0]