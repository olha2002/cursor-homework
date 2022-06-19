class Student {

    constructor(university, course, fullName) {
        this._university = university;
        this._course = course;
        this._fullName = fullName;
        this._marksArray = [5, 4, 4, 5]
    }

    getInfo() {
        return `A ${this._course} year student in ${this._university} is ${this._fullName}`;
    }

    get marks()  {
        return this._marksArray;
    }

    set marks(mark) {
        this._marksArray.push(mark);
    }

}