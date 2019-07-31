/**
 * Function takes in a string
 * calculates how many the patter "abc" is repeated in the string
 * returns the calculation result
 * 
 * @param {*} str String
 */
function cariPelaku(str) {
    return str.match(/abc/g).length;
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2