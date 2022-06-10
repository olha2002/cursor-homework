const students = [{
    name: 'Tanya',
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: 'Victor',
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: 'Anton',
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

// Function #1 that gets the student's subjects
function getSubjects(studentsArray) {
    const result = Object.keys(studentsArray.subjects);
    return result.map(subjectKey => 
        subjectKey[0].toUpperCase() + 
        subjectKey.slice(1).toLowerCase().replaceAll('_', ' '));
}

console.log('Subjects of student Tanya:', getSubjects(students[0]));
console.log('Subjects of student Victor:', getSubjects(students[1]));
console.log('Subjects of student Anton:', getSubjects(students[2]));

function getAverageMark(studentsArray) {
    const splitedMarks = Object.values(studentsArray.subjects);
    const concatedMarks = splitedMarks.flat();
    const initialValue = 0;

    const result = concatedMarks.reduce((previousSubjectValue, currentSubjectValue) =>
        (previousSubjectValue + currentSubjectValue), initialValue
        );

    return Number((result / concatedMarks.length).toFixed(2));
    }

console.log('Average mark of student Tanya: ', getAverageMark(students[0]));
console.log('Average mark of student Victor: ', getAverageMark(students[1]));
console.log('Average mark of student Anton: ', getAverageMark(students[2]));