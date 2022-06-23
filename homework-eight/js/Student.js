class Student {
  constructor(university, course, fullName) {
    this._university = university;
    this._course = course;
    this._fullName = fullName;
    this._marksArray = [5, 4, 4, 5];
    this._student = true;
  }

  getInfo() {
    if (this._student) {
      return `A ${this._course} year student in ${this._university} is ${this._fullName}`;
    }
  }

  get marks() {
    return this._student ? this._marksArray : null;
  }

  set marks(mark) {
    if (this._student) {
      this._marksArray.push(mark);
    }
  }

  getAverageMark() {
    if (this._student) {
      return (
        this._marksArray.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        ) / this._marksArray.length
      );
    }
  }

  dismiss() {
    this._student = false;
  }

  recover() {
    this._student = true;
  }
}
