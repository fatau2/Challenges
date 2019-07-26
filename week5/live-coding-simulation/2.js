/*
  HEROES
  Heroes adalah sebuah fungsi untuk menentukkan karakter apa saja yang disukai
  orang sehingga yang duplikat tidak perlu dicatat.
  Fungsi akan menerima parameter berupa string

  EXAMPLE
  INPUT: "saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"
  OUTPUT: [saitama, naruto, nobita, sasuke]

  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), .unshift()
*/

function Heroes(hero) {
  var words = [];
  var temp = "";
  for (let i = 0; i < hero.length; i++) {
    if (hero[i-1] === "&"){
      temp = hero[i];
    } else if (hero[i] !== "&"){
        temp = temp + hero[i];
    }
    if (hero[i+1] === "&"){
      words.push(temp);
      i++;
    }
  }
  words.push(temp);
  //var animes = [];
  var anime = {}
  for (let i = 0; i < words.length; i++) {
    anime[words[i]] = "";
  }

  if (Object.keys(anime).length <= 1){
    return "there's no heroes";
  } else {
    return JSON.stringify(Object.keys(anime),null,2);
  }
}
  


// TEST CASE
console.log(Heroes("saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"))
// [ 'saitama', 'naruto', 'nobita', 'sasuke' ]
console.log(Heroes("doraemon&&sakura&&inuyasha&&saitama&&shoji&&ikan indosiar"))
// [ 'doraemon', 'sakura', 'inuyasha', 'saitama', 'shoji', 'ikan indosiar' ]
console.log(Heroes(""))
// There's no heroes
