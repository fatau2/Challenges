//Exercise 1

console.log("Exercise 1" + "\n");
var rows1 = 5; // input the number of rows
var counter = 1;
var asterisk = "*";

// do loops to display asterisks in the console.

while(counter<=rows1){
	counter++;
	console.log(asterisk);
}

//Exercise 2


console.log("\n" + "Exercise 2" + "\n");
var counter = 1;
while(counter<=rows1){
	var asteriskCounter = 1;
	var asteriskRow = "";
	//console.log("we got here");
	while(asteriskCounter<=rows1){
		asteriskRow = asteriskRow + asterisk;
		asteriskCounter++;
	}
	console.log(asteriskRow);
	counter++;
}

//Exercise 3


console.log("\n" +"Exercise 3" + "\n");
var counter = 1;
while(counter<=rows1){
	var asteriskCounter = 1;
	var asteriskRow = "";
	//console.log(counter);
	while(asteriskCounter<=counter){
		asteriskRow = asteriskRow + asterisk;
		asteriskCounter++;
	}
	console.log(asteriskRow);
	counter++;
}
