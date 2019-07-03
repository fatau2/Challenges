//Exercise 1

var titleOne = "LOOP PERTAMA";
var titleTwo = "LOOP KEDUA";
var loopingWordOne = "I love coding";
var loopingWordTwo = "I will become a fullstack developer";
var counter = 0;

console.log(titleOne);
while(counter <= 18){
	counter = counter + 2;
	console.log(counter + " - " + loopingWordOne);
}

console.log(titleTwo);
while(counter >= 2){
	console.log(counter + " - " + loopingWordTwo);
	counter = counter - 2;

}

//Exercise 2

console.log(titleOne);
for(counter = 1; counter <= 20; counter++){
	console.log(counter + " - " + loopingWordOne);
}

console.log(titleTwo);
for(counter = 20; counter >= 1; counter--){
	console.log(counter + " - " + loopingWordTwo);
}

//Exercise 3

for(counter = 1; counter <= 100; counter++){
	var modulus = counter % 2;
	if (modulus == 0){
		console.log("Angka " + counter + " adalah GENAP");
	} else{
		console.log("Angka " + counter + " adalah GANJIL");
	}
}

//Counter increment by 2

for(counter = 1; counter <= 100; counter += 2){
        var modulus = counter % 3;
        if (modulus == 0){
                console.log(counter + " kelipatan 3");
        }
}

//Counter increment by 5

for(counter = 1; counter <= 100; counter += 5){
        var modulus = counter % 6;
        if (modulus == 0){
                console.log(counter + " kelipatan 6");
        }
}

//Counter increment by 9

for(counter = 1; counter <= 100; counter += 9){
        var modulus = counter % 10;
        if (modulus == 0){
                console.log(counter + " kelipatan 10");
        }
}

/*counter = counter + 2;
console.log(counter);
*/
