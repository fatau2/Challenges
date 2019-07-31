/**
 * Function takes in a string, flip the case of each letter in the String
 * returns the flipped string
 * @param {*} str String 
 */
function changeVocals (str) {
    var newStr = "";
    for (let i = 0; i < str.length; i++) {
        var temp = str[i];
        var isUpperCase = false;
        if (temp === temp.toUpperCase()){
            isUpperCase = true;
            temp = temp.toLowerCase();
        }
        
        if (temp === 'a' || temp === 'i' || temp === 'u' || temp === 'e' || temp === 'o'){
            if (isUpperCase === true){
                temp = temp.toUpperCase();
            }
            var added = temp.charCodeAt(0) + 1;
            temp = String.fromCharCode(added);
        }
        if (isUpperCase === true){
            temp = temp.toUpperCase();
        }
        newStr = newStr + temp;
    }
    return newStr;
  }
  
  /**
   * Function takes in a string, reverse the order of the letters
   * returns the reversed string
   * @param {*} str String
   */
  function reverseWord (str) {
    var newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i]; 
    }
    return newStr;
  }
  
  function setLowerUpperCase (str) {
    var newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()){
            newStr = newStr + str[i].toLowerCase();
        } else {
            newStr = newStr + str[i].toUpperCase();
        }
        
    }
    return newStr;
  }
  
  /**
   * Function takes in a string, remove spaces in the string
   * returns the space-free string
   * @param {*} str String 
   */
  function removeSpaces (str) {
    var newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            newStr = newStr + str[i];
        }     
    }
    return newStr;
  }
  
  /**
   * Function takes in a string
   * Flip the case
   * Reverse the order of the string
   * Eliminate space in the string
   * Return the new string
   * @param {*} name 
   */
  function passwordGenerator (name) {
    if (name.length < 5 ){
        return "minimal harus 5 karakter";
    } else {
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
    }
  }
  
  //console.log(removeSpaces(setLowerUpperCase(reverseWord(changeVocals('Oergei Aktoyeb')))));
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'