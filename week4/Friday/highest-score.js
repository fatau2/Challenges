/**
 * Function takes in array of students of every classes
 * return the smartest student for each class
 * 
 * @param students Array 
 */
function highestScore (students) {
    var topOfTheClasses = {};
    for (let i = 0; i < students.length; i++) {
        topOfTheClasses[students[i].class] = "";
    }
    var classes = Object.keys(topOfTheClasses);
    //return classes;
    for (let i = 0; i < classes.length; i++) {
      var max = 0;
      var maxStudent = "";
      var topStudent = {};
      for (let j = 0; j < students.length; j++) {
          if (students[j].score > max && students[j].class === classes[i]){
            max = students[j].score;
            maxStudent = students[j].name;
          }
      }
      topStudent.name = maxStudent;
      topStudent.score = max;
      topOfTheClasses[classes[i]] = topStudent;
    }
    return JSON.stringify(topOfTheClasses, null, 2);
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}