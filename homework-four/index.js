const students = ['Oleksandr', 'Igor', 'Olena', 'Ira', 'Oleksii', 'Svitlana'];
const themes = ['Differential equation', 'Theory of automata', 'Algorithms and data structures'];
const marks = [4, 5, 5, 3, 4, 5];

let studentsClone = [...students];
// func that swaps elements of array with students
const swapElements = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];

swapElements(students, 1, 2);

// func that get pairs of students from array with students
function getPairs(arr) {
  let pairsArray = [];

  for (let i = 0; i < arr.length; i++) {
    pairsArray.push( arr.splice(0, 2), arr.splice(0, 2) );
  }
  
  pairsArray.pop()
  return pairsArray;
}

const pairs = getPairs(students);

 //func that get tasks to the array with pairs of students
 function getTasks(arr, arr1) {
  for (let i = 0; i < arr.length; i++) {
      if (arr.length === arr1.length) {
        arr[i].push(arr1[i]);
      }
  }
  
  return arr;
}

const pairsWithTasks = getTasks(pairs, themes);

//func that gets student with his mark
function studentsMarks(arr1, arr2) {
  let marksArray = [];

  for (let i = 0; i < arr1.length; i++) {
    marksArray.push( arr1.splice(0, 1), arr1.splice(0, 1), arr1.splice(0, 1)  );
  }
  for (let j = 0; j < arr2.length; j++) {
    if (marksArray.length === arr2.length) {
      marksArray[j].push(arr2[j])
      }
  }

  return marksArray;
}
const studentsWithMarks = studentsMarks(studentsClone, marks);

//func that calcs students with their marks for the project
function studentsEvaluatedProjects(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    let randomNum = Math.ceil(Math.random() * 5);
    arr1[i].push(randomNum);
  }

  return arr1;
}

const studentsEvaluatedProjectsArr = studentsEvaluatedProjects(pairsWithTasks);

console.log('Students and their marks: ', studentsWithMarks );
console.log( 'Pairs of students, their topics and random marks: ', studentsEvaluatedProjectsArr);
