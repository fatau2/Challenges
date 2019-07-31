/**
 * Function takes in a number as parameter, using recursive keep adding each number in the parameter until the last number is added
 * returns the summation result
 * 
 * @param angka int
 */
function totalDigitRekursif(angka) {
    if (!angka) {
        return 0;
    } else {
        //return parseInt(angka.toString()[0]) + totalDigitRekursif(angka.toString().substring(2));
        return parseInt(angka.toString()[0]) + totalDigitRekursif(parseInt(angka.toString().substring(1,angka.toString().length)));
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5