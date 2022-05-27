const students = ['Oleksandr', 'Igor', 'Olena', 'Ira', 'Oleksii', 'Svitlana'];
const themes = ['Differential equation', 'Theory of automata', 'Algorithms and data structures'];
const marks = [4, 5, 5, 3, 4, 5];

let studentsClone = [...students];

const boysArray = studentsClone.filter(student => !student.endsWith('a'));
const girlsArray = studentsClone.filter(student => student.endsWith('a'));

// func that combines students 
function combineBoth(arr1, arr2) {
  return arr1.map((e, i) => [e, arr2[i]]);
}
const combinedBoysGirls = combineBoth(boysArray, girlsArray);

 //func that get tasks to the array with pairs of students
 function getTasks(arr, arr1) {
  const newPair = arr.map((el) => el.join(' and '));
  return newPair.map( (arr, i) => [arr, arr1[i]] );
  }
 const pairsWithTasks = getTasks(combinedBoysGirls, themes);

//func that gets student with his mark
function studentsMarks(arr1, arr2) {
  let marksArray = [];

  for (let i = 0; i < arr1.length; i++) {
    marksArray.push( arr1.splice(0, 1), arr1.splice(0, 1), arr1.splice(0, 1)  );
  }
  for (let j = 0; j < arr2.length; j++) {
      marksArray[j].push(arr2[j])
  }

  return marksArray;
}
const studentsWithMarks = studentsMarks(studentsClone, marks);

//func that calcs students with their marks for the project
function studentsEvaluatedProjects(arr1) {
  return arr1.map((studentsWithMarks) => [...studentsWithMarks, Math.ceil(Math.random() * 5)]);
}
const studentsEvaluatedProjectsArr = studentsEvaluatedProjects(pairsWithTasks);

console.log('Boys list: ', boysArray );
console.log( 'Girls list: ', girlsArray );
console.log( 'Both boys and girls: ', combinedBoysGirls );
console.log( 'Pairs and their tasks: ', pairsWithTasks );
console.log( 'Student and his mark: ', studentsWithMarks );
console.log( 'Pairs of students that has their evaluated projects', studentsEvaluatedProjectsArr );