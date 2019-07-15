var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]


function dataHandling(input){
    console.log(input);
    console.log(input.length);
    var counter = 0;    
    while (counter !== input.length){
        var rowCounter = 0;
        var currentRow = input[counter];
        while(rowCounter !== currentRow.length){
            if (rowCounter == 0){
            console.log("ID: " + currentRow[rowCounter]);
            } 
            if (rowCounter == 1){
                console.log("Nama Lengkap: " + currentRow[rowCounter]);
            }
            if (rowCounter == 3){
                console.log("TIL: " + currentRow[rowCounter - 1] + " " + currentRow[rowCounter]);
            }
            if (rowCounter == 4){
                console.log("Hobi: " + currentRow[rowCounter] + "\n");
            } 
            rowCounter++;
        }
        counter++;
    }
}

dataHandling(input);