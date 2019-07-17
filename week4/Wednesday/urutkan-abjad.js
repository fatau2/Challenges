/**
 * Function takes in a word, sort the letters in the word based on its unicode (ascending)
 * Returns a new word with the sorted letters
 * 
 * @param {} str 
 */
function urutkanAbjad(str) {
        var letterUnicodes = [];
        for (var i = 0; i < str.length; i++){
            letterUnicodes.push(str[i].charCodeAt(0));
        }
        var loopCounter = 1;
        while (loopCounter !== letterUnicodes.length){
            for(var i = 0; i < letterUnicodes.length; i++){
                if(letterUnicodes[i] > letterUnicodes[i+1]){
                    var temp = letterUnicodes[i];
                    letterUnicodes[i] = letterUnicodes[i+1];
                    letterUnicodes[i+1] = temp;
                }
            }
            loopCounter++;
        }
        var newWord = "";
        for(var i = 0; i < letterUnicodes.length; i++){
            newWord = newWord + String.fromCharCode(letterUnicodes[i]);
        }
        return newWord;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'