// 1. Buat object seperti ini

function meMyself (){
    var me = {
        "name" : "Farras",
        "batch": "humble fox",
        "hobbies": ["cycling", "swimming", "hiking"]
    }

    return me;
}

console.log(meMyself());
/*
  {
    name: YOUR_NAME,
    batch: YOUR_BATCH,
    hobbies: [YOUR_HOBBIES]
  }
*/

// 2. Memasukkan array ke dalam object
// Urutannya [NAME, CLUB, AGE]

function footballPlayersRegister (players){
    
var playerList = [];
    for (let i = 0; i < players.length; i++) {
        var player = {
            "name": "",
            "club": "",
            "age": "",
            "gender": "",
        }
        for (let j = 0; j < players[i].length; j++) {
            player[Object.keys(player)[j]] = players[i][j];  
        }
        playerList.push(player);
    }
    return playerList;
}
var insertToObjects = [
    ['Kapten Tsubasa', 'Nankatsu', 19, 'M'],
    ['Kapten Tsubasa', 'Nankatsu', 19, 'M'],
    ['Wakabayashi', 'Nankatsu', 20, 'M'],
    ['Saitama', 'Hero Associate', 18, 'M'],
    ['Shizuka', 'Dora Associate', 18, 'F']
  ]
  
  console.log(JSON.stringify(footballPlayersRegister(insertToObjects),null,2));
  // 3. Membuat array menjadi unik
  
  function makeUnique(arrayOfNames) {
    var uniqueArray = [];
    for (let i = 0; i < arrayOfNames.length; i++) {
        var hasFoundDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if(uniqueArray[j] === arrayOfNames[i]){
                hasFoundDuplicate = true;
            }
        }
        if(!hasFoundDuplicate){
            uniqueArray.push(arrayOfNames[i]);
        }
    }
    return uniqueArray;
  }
  
   console.log(makeUnique(
     ['Lee Min Ho', 'Lee Kwang Ho', 'Lee Min Ho', 'Lee Min Ho', 'Lindan', 'Lee Kwang Ho']
   ))
  
  // ['Lee Min Ho', 'Lee Kwang Ho', 'Lindan']