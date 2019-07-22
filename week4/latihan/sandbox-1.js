/*
  1. cara mendeklarasikan object, cara membuat properties serta valuenya
  2. cara mengakses data di object
  3. cara melooping object
  4. mengubah dari array ke object
  5. Object.keys dan Object.values
*/

var student = {
    name: 'tatag',
    batch: '30-humble-fox',
    age: 28,
    hobbies: [
      {
        nama: 'ngoding',
        kemampuan: 'advanced'
      },
      {
        nama: 'baca dokumentasi',
        kemampuan: 'moderate'
      },
      {
        nama: 'main codewars',
        kemampuan: 'expert'
      }
    ],
    laguFavorit: 'cinta satu malam',
    '1': 'satu'
  }
  
  // console.log(student['1'])
  
  // var student = {}
  // student.name = name
  // student.batch = '30-humble-fox'
  // student.age = 28
  
  // 1. Mengakses
  var umur = 'batch'
  // console.log(student.age)
  // console.log(student[umur]) // student['age'] == student.age
  
  
  // 2.
  let keys = Object.keys(student)
  
  for(var i = 0 ; i < keys.length; i++) {
    // console.log(keys[i], student[keys[i]])
  }
  
  var arrStudents = [
    ['Joko', 25],
    ['Febian', 20],
    ['Zaki', 11],
    ['Joko', 10]
  ]
  
  /* 
  var objStudents = {
    Joko: 25,
    Febian: 20,
    Zaki: 11
  }
   */
  
  var objStudents = {}
  for(var i = 0 ; i < arrStudents.length; i++) {
    if(objStudents[arrStudents[i][0]] === undefined) {
      objStudents[arrStudents[i][0]] = arrStudents[i][1]
    } else {
      objStudents[arrStudents[i][0]] += arrStudents[i][1]
    }
  }
  // console.log(objStudents)
  
  var values = Object.values(student)
  
  // console.log(keys, values)
  
  
  for(var key in student) {
    console.log(key, '\t', student[key])
  }