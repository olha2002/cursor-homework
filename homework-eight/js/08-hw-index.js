const student = new Student("Lviv Polytechnic", "third", "Olha Orach");
const studentTwo = new BudgetStudent(
  "Lviv Polytechnic",
  "third",
  "Olha Orach",
  1400
);

student.marks = 5;
console.log("Student info: ", student.getInfo());
console.log("Student Marks: ", student.marks);
console.log("Average mark: ", student.getAverageMark());

student.dismiss();

student.marks = 2;
console.log("Student Marks: ", student.marks);
console.log("Student info: ", student.getInfo());
console.log("Average mark: ", student.getAverageMark());

student.recover();

console.log("Student Marks: ", student.marks);
console.log("Student info: ", student.getInfo());
console.log("Average mark: ", student.getAverageMark());

studentTwo.dismiss();
studentTwo.recover();
