/**
 * ////////////////
 * changeXRecursive
 * ////////////////
 * Function ini harus dikerjakan dengan menggunakan rekursif.
 * Function ini menerima dua parameter, yaitu:
 *  1. data yang merupakan string dari number
 *  2. jenis yang merupakan string berisi antara ganjil dan genap
 * 
 * [EXAMPLE]
 * Input: data = 012345678922468 dan jenis = ganjil
 * Process: Karena jenisnya ganjil maka setiap bilangan genap diubah menjadi x
 * Output: x1x3x5x7x9xxxxx
 *  
 * [RULES]
 * 1. Dilarang mengubah tipe parameter function
 * 2. Dilarang membuat function diluar function yang disediakan
 * 3. Wajib menggunakan rekursif
 */

function changeXRecursive(data, jenis) {
  var number = parseInt(data);
  var newData = "";
  if (!data) {
    return "";
}
  for (let i = 0; i < data.length; i++) {
    if (jenis === "ganjil"){
      if (parseInt(data[i]) % 2 === 0){
        newData = newData + 'X';
      } else {
        newData = newData + data[i];
      }
    }
    if (jenis === "genap"){
      if (parseInt(data[i]) % 2 !== 0){
        newData = newData + 'X';
      } else {
        newData = newData + data[i];
      }
    }
    
  }
  //console.log(newData.substring(1,data.length));
  //return number;
  return newData[0] + changeXRecursive(newData.substring(1,data.length), jenis);
}

console.log(changeXRecursive('012345678922468', 'ganjil'));//x1x3x5x7x9xxxxx
console.log(changeXRecursive('0123456789', 'genap'));//0x2x4x6x8x
