/**
 * Function takes in passenger details including his name, where he is and where he wants to go
 * function returns how much the passenger has to pay to get to his destination from where he is
 * 
 * @param arrPenumpang Array 
 */
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
        var journeyDetails = [];
        if (arrPenumpang.length !== 0){
            for (let i = 0; i < arrPenumpang.length; i++) {
                var departurePoint = 0;
                var destinationPoint = 0;
                var departurePointFound = false;
                for (let j = 0; j < rute.length; j++) {
                    if (arrPenumpang[i][1] === rute[j]){
                        departurePoint = j;
                        departurePointFound = true;
                    }
                    if (arrPenumpang[i][2] === rute[j] && departurePointFound == true){
                        destinationPoint = j;
                    }
                }
                var distance = destinationPoint - departurePoint;
                var journeyObject = {
                    "penumpang" : arrPenumpang[i][0],
                    "naikDari" : arrPenumpang[i][1],
                    "tujuan" : arrPenumpang[i][2],
                    "bayar" : 2000 * distance
                }
                journeyDetails.push(journeyObject);
            }
        }
        return JSON.stringify(journeyDetails,null,2); 
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]