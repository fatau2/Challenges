/*
  SELECT OPTION
  Select Option adalah sebuah fungsi untuk mengambil nilai tengah atau median dari
  array hasil kelipatan dari keynya.
  Fungsi akan menerima parameter berupa array dan key yang ingin dicari.

  EXAMPLE
  INPUT: array = [1, 2, 3, 4, 5, 6, 7], key = 2
  PROCESS: [2, 4, 6] adalah array yang merupakan kelipatan 2
  MEDIAN: 4
  OUTPUT: 4 adalah nilai median dari array di process

  INPUT: array = [1, 2, 3, 4, 5, 6], key = 1
  PROCESS: [1, 2, 3, 4, 5, 6] adalah array yang merupakan kelipatan 1
  MEDIAN: (3 + 4)/2
  OUTPUT: 3.5 adalah nilai tengah dari array di process

  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), Math, dan .unshift()
  2. WAJIB menggunakan PSEUDOCODE

  PSEUDOCODE
  READ parameter "array" an Array object and "key" an integer
  FOR EACH integer in "array"
    integer IS key modulus
  STORE integer in "factors" ARRAY
  IF factors length is even
    RETURN average of the 2 integers in the middle of the list
  IF factors length is odd
    RETURN integer in the middle of the list
*/

function selectOption(array, key) {
  var factors = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % key === 0){
      factors.push(array[i]);
    }
  }
  if (factors.length % 2 !== 0){
    return factors[Math.floor(factors.length/2)];
  }
  if (factors.length % 2 === 0){
    if (factors.length === 0){
      return "there's no option"
    } else {
    return ((factors[Math.floor(factors.length/2)] + factors[Math.floor(factors.length/2 - 1)])/2);
    }
  }
  
  //return factors;
  
}

// TEST CASE
console.log(selectOption([1, 2, 3, 4, 5, 6, 7], 2)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 1)) // 3.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 3)) // 4.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 4)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 7)) // There's not option
