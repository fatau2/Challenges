/**
 * Function takes in a number as parameter, using recursive keep multiplying each number in the parameter until the last number is multiplied
 * If the resulting number has multiple digit, multiply each number in the new digit again until the result is a single digit number
 * 
 * @param {*} angka int 
 */
function kaliTerusRekursif(angka) {
    if (!angka) {
        return 1;
    }
    var total = 1;
    for (let i = 0; i < angka.toString().length; i++) {
        total = total * parseInt(angka.toString()[i]);
    }

    if (total > 9){
        var temp = total;
        total = 1;
        for (let i = 0; i < temp.toString().length; i++) {
            total = total * parseInt(temp.toString()[i]);  
        }
    }
    return parseInt(total.toString()[0]) * kaliTerusRekursif(parseInt(total.toString().substring(1,total.toString().length)));
  }
  
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6