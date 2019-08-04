


var positions = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]
var currentI = 1;
var currentJ = 1;
var count = 0;
function goUp() {
    if (count < 4){
        if (!document.getElementById(currentI - 1 + "." + currentJ)){
            document.getElementById("output").innerHTML = "out of bounds!";
        } else {
            currentI = currentI - 1;
            var pos = currentI + "." + currentJ;
            if (document.getElementById(pos).style.backgroundColor === "red"){
                //document.getElementById(pos).innerHTML += 'Second pass';
                count++;
            } else {
            document.getElementById(pos).style.backgroundColor = "red";
            //console.log(document.getElementById("1.1"));
            count++;
            }
        }
    } else {
        return document.getElementById("output").innerHTML = "Maximum steps reached, press reset to play again";
    }
  }
  function goDown() {
    if (count < 4){
        if (!document.getElementById(currentI + 1 + "." + currentJ)){
            document.getElementById("output").innerHTML = "out of bounds!";
        } else {
            currentI = currentI + 1;
            var pos = currentI + "." + currentJ;
            if (document.getElementById(pos).style.backgroundColor === "red"){
                //document.getElementById(pos).innerHTML += 'Second pass';
                count++;
            } else {
                document.getElementById(pos).style.backgroundColor = "red";
                //console.log(document.getElementById("1.1"));
                count++;
            }
        }
    } else {
        return document.getElementById("output").innerHTML = "Maximum steps reached, press reset to play again";
    }
  }
  function goRight() {
    if (count < 4){
        if (!document.getElementById(currentJ + 1 + "." + currentI)){
            document.getElementById("output").innerHTML = "out of bounds!";
        } else {
            currentJ = currentJ + 1;
            var pos = currentI + "." + currentJ;
            if (document.getElementById(pos).style.backgroundColor === "red"){
                //document.getElementById(pos).innerHTML += 'Second pass';
                count++;
            } else {
                document.getElementById(pos).style.backgroundColor = "red";
                //console.log(document.getElementById("1.1"));
                count++;
            }
        }
    } else {
        return document.getElementById("output").innerHTML = "Maximum steps reached, press reset to play again";
    }
  }
  function goLeft() {
    if (count < 4){
        if (!document.getElementById(currentJ - 1 + "." + currentI)){
            document.getElementById("output").innerHTML = "out of bounds!";
        } else {
            currentJ = currentJ - 1;
            var pos = currentI + "." + currentJ;
            if (document.getElementById(pos).style.backgroundColor === "red"){
                //document.getElementById(pos).innerHTML += 'Second pass';
                count++;
            } else {
                document.getElementById(pos).style.backgroundColor = "red";
                //console.log(document.getElementById("1.1"));
                count++; 
            }
        }
    } else {
        return document.getElementById("output").innerHTML = "Maximum steps reached, press reset to play again";
    }
  }

  function resetCount() {
      count = 0;
      currentI = 1;
      currentJ = 1;
      var content;
      var listOfBoxes = document.getElementsByClassName("cell");
      for (let i = 0; i < listOfBoxes.length; i++) {
        content = listOfBoxes[i];
        document.getElementById(listOfBoxes[i].id).style.backgroundColor = "gainsboro";
        //if (document.getElementById(listOfBoxes[i].id).textContent !== "Go!"){
         //   document.getElementById(listOfBoxes[i].id).innerHTML = '';
        //}
        
          
      }
      /* content = document.getElementById("5.1");
      if (!content){
        document.getElementById("output").innerHTML = "empty";
      } else {
        document.getElementById("output").innerHTML = "not empty";
      } */
      return document.getElementById("output").innerHTML = "";
  }

  //console.log(resetCount());
