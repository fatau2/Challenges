/*
  //////////////////
  SUPER SHOOT SOCCER
  //////////////////

  Function Super Shot Soccer akan menunjukkan juara dari kompetisi sepak bola. Fungsi ini
  akan menerima parameter berupa array of object, dan mengembalikkan nilai berupa object urutan juara.

  EXAMPLE
  INPUT: [
    {Name: 'Hideous', Power: 100, Club: 'Germany'},
    {Name: 'Sakuragi', Power: 84, Club: 'Japan'},
    {Name: 'Kira', Power: 40, Club: 'Korea'},
    {Name: 'Andre', Power: 59, Club: 'Egypt'}
  ]
  NOTES: 
    - Juara ditentukkan berdasarkan nilai powernya
    - Input array of object selalu ada value object orangnya
  PROCESS:
    - Germany => 100
    - Japan => 84
    - Korea => 40
    - Egypt => 59
  OUTPUT: {
    'Juara 1': 'Germany',
    'Juara 2': 'Japan',
    'Juara 3': 'Egypt',
    'Juara 4': 'Korea'
  }

  RULES:
    - Hanya boleh menggunakan built in function .push()
    - Asumsi setiap club tidak akan memiliki lebih dari 1 pemain
    - Asumsi jumlah power dari setiap club berbeda
*/

function superShootSoccer(players) {
  var scores = [];
  for (let i = 0; i < players.length; i++) {
    scores.push(players[i]["Power"]);
  }
  //sortingHappens
  var loopCounter = scores.length;
  while (loopCounter !==0){ 
    for (let i = 0; i < scores.length - 1; i++) {
      var temp = 0;
      if (scores[i] < scores[i+1]){
        temp = scores[i];
        scores[i] = scores[i+1];
        scores[i+1] = temp;
      }
    }
    loopCounter--;
  }
  var winnerByCountry = [];
  for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < players.length; j++) {
      if (players[j]["Power"] === scores[i]){
        winnerByCountry.push(players[j]["Club"])
      }
    } 
  }
  console.log(scores);
  var output = {};

  output["Juara 1"] = winnerByCountry[0];
  output["Juara 2"] = winnerByCountry[1];
  output["Juara 3"] = winnerByCountry[2];
  output["Juara 4"] = winnerByCountry[3];
    
  
  return JSON.stringify(output,null,2);
}

console.log(superShootSoccer([
  {Name: 'Hideous', Power: 100, Club: 'Germany'},
  {Name: 'Sakuragi', Power: 84, Club: 'Japan'},
  {Name: 'Kira', Power: 40, Club: 'Korea'},
  {Name: 'Andre', Power: 59, Club: 'Egypt'}
]))
// { 'Juara 1': 'Germany',
//   'Juara 2': 'Japan',
//   'Juara 3': 'Egypt',
//   'Juara 4': 'Korea' }

console.log(superShootSoccer([
  {Name: 'Hideous', Power: 20, Club: 'Germany'},
  {Name: 'Sakuragi', Power: 77, Club: 'Japan'},
  {Name: 'Kira', Power: 41, Club: 'Korea'},
  {Name: 'Andre', Power: 84, Club: 'Egypt'}
]))
// { 'Juara 1': 'Egypt',
//   'Juara 2': 'Japan',
//   'Juara 3': 'Korea',
//   'Juara 4': 'Germany' }