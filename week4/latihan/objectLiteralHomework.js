/*
  Poin-poin yang wajib dikuasai adalah:
  1. cara mendeklarasikan object, cara membuat properties serta valuenya
  2. cara mengakses data di object
  3. cara melooping object
  4. mengubah dari array ke object
  5. Object.keys dan Object.values
  Latihan:
  1. cara membuat object literal
  2. cara memasukkan kumpulan array menjadi object
  3. cara membuat array menjadi unik
*/

// 1. membuat object literal (3 times)

function createObjectLiteral(name, batch, hobbies) {

    var object = {
        "name" : name,
        "batch" : batch,
        "hobbies" : hobbies
    }

    return object;
}

console.log(createObjectLiteral('', 0, []))
/*
  {
    name: '....',
    batch: '.....',
    hobbies: []
  }
*/

// 2. mengakses object literal (3 times)

var objectLiteral = {
  name: 'Farras',
  batch: 'humble fox',
  hobbies: ['bermain', 'menggambar']
}

console.log("Nama saya adalah " + objectLiteral.name);
console.log("Saya berada di batch " + objectLiteral.batch);
console.log("Hobby saya adalah " + objectLiteral.hobbies);

/*
  // Nama saya adalah .....
  // Saya berada di batch ....
  // Hobby saya adalah ....
*/

// 3. melooping object (7 times)
// object berbeda dengan array, karena object tidak punya index
// jadi urutan di object harusnya ngga dipermasalahkan, sehingga
// apabila ingin melakukan operasi yang harus berurutan lebih baik
// menggunakan array.

// notes: apabila properties dari object merupakan number, dia akan secara
// otomatis akan berurutan. sehingga bisa dimanfaatkan untuk kebutuhan tertentu

var hogwarts = {
  gryffindor: 30,
  hufflepuff: 29,
  ravenclaw: 29,
  slytherin: 28
}

// 4. mengubah dari array ke object (5 times)

function changeArrayToObject(array) {
    var scores = {};
    for (let i = 0; i < array.length; i++) {
        if(!scores[array[i][0]]){
        scores[array[i][0]] = array[i][1];
        } else {
            scores[array[i][0]] = scores[array[i][0]] + array[i][1];
        }
    }
    return JSON.stringify(scores);
}

// 4.1 ini satu semua
 console.log(changeArrayToObject([
   ['gryffindor', 30],
   ['hufflepuff', 29],
   ['ravenclaw', 29],
   ['ravenclaw', 30],
   ['slytherin', 28]
 ]))

// notes: di object keynya pasti unik, jadi ngga ada yang bisa double.

// 4.2 bagaimana kalau ada beberapa, dan hanya diambil yang paling besar
function changeArrayToObject1(array){
    var scores = {};
    for (let i = 0; i < array.length; i++){
        if (scores[array[i][0]] === undefined){
            scores[array[i][0]] = array[i][1];
        }
        if (scores[array[i][0]] < array[i][1]){
            scores[array[i][0]] = array[i][1];
        }
    }
    return JSON.stringify(scores,null,2);
} 
console.log(changeArrayToObject1([
   ['gryffindor', 30],
   ['gryffindor', 32],
   ['gryffindor', 29],
   ['slytherin', 40],
   ['slytherin', 28]
 ]))

// 5. bonus Object.keys dan Object.values 
// ubah hogwarts ke dalam bentuk array properties/keysnya dan array bentuk valuesnya

function changeObjectToArray(hogwarts){
    var hogwartsArray = [];
    console.log(hogwarts);
    for (let i = 0; i < Object.keys(hogwarts).length; i++) {
        hogwartsArray.push([Object.keys(hogwarts)[i], Object.values(hogwarts)[i]]);
    }
    return JSON.stringify(hogwartsArray,null,2);
}

console.log(changeObjectToArray(hogwarts));