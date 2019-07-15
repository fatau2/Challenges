//contoh output
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(array){
    array.splice(1,1,"Roman Alamsyah Elsharawy");
    array.splice(2,1,"Provinsi Bandar Lampung");
    array.splice(4,2,"Pria","SMA Internasional Metro");
    var date = identity[3];
    var dateFormatted = date.split("/")
    var month = parseInt(dateFormatted[1],10);
    var monthAlphabet = "";
    var integerDate = [];
    var counter = 0;
    while (counter <= dateFormatted.length-1){
        integerDate.push(parseInt(dateFormatted[counter],10));
        counter++;
    }
    var sortedIntList = integerDate.sort();
    counter = 0;
    var stringDate = [];
    while (counter <= sortedIntList.length-1){
        temp = sortedIntList[counter] + "";
        if (temp.length === 1){
            temp = "0" + temp;
        }
        stringDate.push(temp);
        counter++;
    }

    switch (month){
        case 1:
            monthAlphabet = "January";
            break;
        case 2:
            monthAlphabet = "February";
            break;
        case 3:
            monthAlphabet = "March";
            break;
        case 4:
            monthAlphabet = "April";
            break;
        case 5:
            monthAlphabet = "May";
            break;
        case 6:
            monthAlphabet = "June";
            break;
        case 7:
            monthAlphabet = "July";
            break;
        case 8:
            monthAlphabet = "August";
            break;
        case 9:
            monthAlphabet = "September";
            break;
        case 10:
            monthAlphabet = "October";
            break;
        case 11:
            monthAlphabet = "November";
            break;
        case 12:
            monthAlphabet = "December";
            break;


    }
    console.log(array);
    console.log(monthAlphabet);
    console.log(stringDate);
    console.log(dateFormatted.join("-"));
    console.log(array[1].slice(0,15));
}

var identity = ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"];

dataHandling2(identity);