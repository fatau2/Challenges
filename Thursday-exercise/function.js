//Exercise 1

function shoutOut(){
	var sentence = "Halo Function!"
	return sentence;
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console

//Exercise 2

/*
 BUATLAH KODE FUNCTION DISINI
*/

function calculateMultiply(num1,num2){
	var multiplied = num1*num2;
	return multiplied;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

//Exercise 3

/*
 BUATLAH KODE FUNCTION DISINI
*/

function processSentence(name,age,address,hobby){
	var sentence = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
	return sentence;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
