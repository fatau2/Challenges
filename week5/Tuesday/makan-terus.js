/**
 * Function takes in parameter "time", using recursive while time has not run out
 * for every 15 minutes add one more food to the customer table. Return how many food
 * has been delivered to the table by the time the time runs out
 * 
 * @param waktu int 
 */
function makanTerusRekursif(waktu) {
    var reduceBy = 15;
    if (waktu <= 0){
        return 0;
    } else {
        return 1 + makanTerusRekursif(waktu-reduceBy);
    }
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0