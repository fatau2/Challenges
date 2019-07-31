/*
	Dalam sebuah game, hero yang dapat dipilih memiliki jenis tertentu
	Dalam game ini satu tim harus memilih 5 heroes yang akan dimainkan
	Disini kamu diminta menampilkan apakah pick hero yang dilakukan tergolong good atau bad dengan kodisi sebagai berikut
		good pick : jika dari hero yang di pick tidak memiliki lebih dari 2 tipe hero yang sama
    bad pick : jika dari hero yang di pick ada 3 atau lebih tipe hero yang sama
    pick list : ranger, mage, tank, warrior, atau assassin (cuma ada 5 tipe ini)
  tampilkan apakah good pick atau bad pick dan jenis apa yang lebih dari 2, pesan seperti pada test case

  [RULES]
  1. Wajib menggunakan Algoritma/Pseudocode
  2. Hanya boleh menggunakan built in function .split(), .unshift(), dan .push()

  [ALgoritma]
  1. SPLIT parameter "composition" by the character ","
  2. STORE the split character into an Array "listOfHeroes"
  3. IF "listOfHeroes" length is LESS than 5 
        RETURN "Not sufficient players"
  4. COUNT the number of times the element in the "listOfArrays" is repeated
  5. STORE the count result into an array of objects "heroObjects" that STORE the hero name and hero repeat count
  6. STORE valid hero types as list "validNames"
  7. IF any of the hero name stored "heroObjects" is not found in array "validNames"
        RETURN the name is not valid
  8. IF any of the valid hero name in "heroObjects" is repeated more than twice 
        RETURN "bad, pick too many of the hero"
  9. ELSE
        RETURN "good pick"
*/

function heroPick(composition) {
    var listOfHeroes = composition.split(",");
    if (listOfHeroes.length < 5){
      return "not sufficient players"
    }
    //console.log(listOfHeroes);
    var heroObjects = [];
    for (let i = 0; i < listOfHeroes.length; i++) {
      var hero = {};
      var hasFound = false;
      hero.name = listOfHeroes[i];
      hero.count = 1;
      for (let j = 0; j < heroObjects.length; j++) {
        if (heroObjects[j].name === hero.name){
          heroObjects[j].count = heroObjects[j].count + 1;
          hasFound = true;
        }
        
      }
      if (hasFound === false){
        heroObjects.push(hero);
      }
    }
    //return JSON.stringify(heroObjects,null,2);

    //check if valid name
    var validName = ["ranger","mage","tank","warrior","assassin"]
    for (let i = 0; i < heroObjects.length; i++) {
      var valid = false;
      var invalidName = "";
      for (let j = 0; j < validName.length; j++) {
        if (heroObjects[i].name === validName[j]){
          valid = true;
        }   
      }
      if (valid === false){
        invalidName = heroObjects[i].name;
      }
      
    }
    if (valid === false){
      return invalidName + " is not on the pick list";
    }
    //check good picks
    for (let i = 0; i < heroObjects.length; i++) {
      var foundMoreThanTwo = false;
      var moreThanTwoName = "";
      if (heroObjects[i].count > 2){
        foundMoreThanTwo = true;
        moreThanTwoName = heroObjects[i].name;
        return "bad pick, too many " + moreThanTwoName;
      }
    }
    return "good pick";

}

  
  


// Test case
console.log(heroPick('ranger,ranger,mage,tank,warrior')) // good pick
console.log(heroPick('mage,mage,tank,mage,warrior')) // bad pick too many mage
console.log(heroPick('mage,mage,tank,mage')) // not sufficient players
console.log(heroPick('mage,mage,god,mage,mage')) // god is not on the pick list
