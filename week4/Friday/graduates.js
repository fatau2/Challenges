/**
 * Function takes in list of students from every classes with their grade
 * Returns list of students for each class who passed
 * 
 * @param students Array 
 */
function graduates (students) {
    var graduated = {};
    for (let i = 0; i < students.length; i++) {
        graduated[students[i].class] = ""; 
    }
    for (let j = 0; j < Object.keys(graduated).length; j++) {
        var passingGrade = 75;
        var studentPassedPerClass = [];
        for (let k = 0; k < students.length; k++) {
            if (students[k].class === Object.keys(graduated)[j] && students[k].score >= passingGrade){
                studentPassedPerClass.push(students[k]);
            }
        }
        graduated[Object.keys(graduated)[j]] = studentPassedPerClass;
    }
    return JSON.stringify(graduated, null, 2);
  }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}