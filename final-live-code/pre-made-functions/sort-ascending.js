function sortThisAscending(list){
    var loopCounter = 0;
    while (loopCounter !== list.length){
        for (let i = 0; i < list.length - 1; i++) {
            if (list[i] > list[i+1]) {
                var temp = list[i];
                list[i] = list[i+1];
                list[i+1] = temp;
            }
        }
        loopCounter++;
    }
    return list;
}

console.log(sortThisAscending([4,7,4,5,2])); //[2,4,4,5,7]
console.log(sortThisAscending([8,7,9,3,0])); //[0,3,7,8,9]