//input "hello world!"
//output
//"!dlrow olleh"

//var helloworld = "helloworld";
    function balikString(helloworld){
        var reversed = "";
        var counter = helloworld.length - 1;
        while(counter >= 0){
            reversed = reversed + helloworld[counter];
            counter--;
        }
    console.log(reversed);
}

balikString("helloworld");
