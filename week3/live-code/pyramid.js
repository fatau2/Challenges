/*
  /////////////
  pyramidNumber
  /////////////

  pyramidNumber adalah suatu program untuk menampilkan piramida.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var max = 5

  [OUTPUT]
    1
    22
    333
    4444
    55555

  [RULES]
    1. Dilarang menggunakan built in function apapun.
    2. Asumsi nilai minimum max adalah 1.
*/

var max = 9; // silahkan beri nilai bebas

// code here

var counter = 1;
var bottomline = 0;
while (counter <= max){
    var secondCounter = counter;
    var sentence = "";
    while(secondCounter !== bottomline){
        sentence = sentence + counter;
        secondCounter--;
    }
    console.log(sentence);
    counter++;
}
