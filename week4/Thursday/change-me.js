function changeMe(arr) {
    if(arr.length > 0){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][3] !== undefined || arr[i][3] > 2019){
                avenger = {
                    "firstName" : arr[i][0],
                    "lastName" : arr[i][1],
                    "gender" : arr[i][2],
                    "age" : 2019 - arr[i][3]
                }
            } else {
                avenger = {
                    "firstName" : arr[i][0],
                    "lastName" : arr[i][1],
                    "gender" : arr[i][2],
                    "age" : "invalid birth year"
                }
            }
            console.log(i+1 + ". " + avenger.firstName + " " + avenger.lastName + ": ");
            console.log(avenger);
        }
    } else {
            console.log('" "');
    }
} 
  
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""