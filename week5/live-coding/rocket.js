/*
==========
rememberMe
==========
[INSTRUCTIONS]
rememberMe adalah sebuah fungsi yang akan menerima parameter dengan tipe data array 
kemudian mengembalikkan nilai string.

[EXAMPLE]
INPUT: ['re', 'em', 'b', 'erm', 'em']
PROCESS: 
  're' diambil untuk melengkapi rememberme => memberme
  'em' diambil untuk melengkapi memberme => mberme
  'b' diambil untuk melengkapi mberme => merme
  'erm' diambil untuk melengkapi merme => me
  'em' diambil untuk melengkapi me => true
OUTPUT: completed

INPUT: ['rembrm']
PROCESS:
  'rembr' diambil untuk melengkapi rememberme => ememe
OUTPUT: ememe

[RULES]
  1. hanya boleh menggunakan built in function .push(), .unshift()
  2. kata yang dicari adalah rememberme
*/


function rememberMe(lyrics) {
    var sentence = "rememberme";
    var secondSentence = "";
    for (let i = 0; i < lyrics.length; i++) {
        secondSentence = secondSentence + lyrics[i];
    }
    for (let j = 0; j < secondSentence.length; j++) {
      //console.log(secondSentence.length);
      sentence = spliceThis(sentence,secondSentence[j]);
    }
    return sentence;
  }
  
function spliceThis(sentence, characterToBeDeleted){
  var newSentence = "";
  var count = 1;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== characterToBeDeleted){
     newSentence = newSentence + sentence[i];
    }
     if (sentence[i] === characterToBeDeleted && count <= 0){
      newSentence = newSentence + sentence[i];
     }
    if (sentence[i] === characterToBeDeleted){
      count--;
    } 
  }
  //console.log(newSentence);
  return newSentence;
}
  console.log(rememberMe(['re', 'em', 'b', 'erm', 'em'])) //completed
  console.log(rememberMe(['rembr'])) //ememe
  console.log(rememberMe(['zoqoqo', 'zeieie', 'azzreqwm', 'fdasb', 'ravae', 'rera', 'mmmmm'])) //completed
  //console.log(spliceThis("remember me", "e", 1));