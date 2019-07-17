/**
 * Function takes in a word, change each letter in the word to the letter after it
 * returns the new word
 * 
 * @param kata string 
 */
function ubahHuruf(kata) {
    var letter = 'b';
    var newWord = "";
    for (var i in kata){
        newWord = newWord + String.fromCharCode((kata.charCodeAt(i) + 1));
    }
    return newWord;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
