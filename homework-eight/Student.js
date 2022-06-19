class Student {

    constructor(university, course, fullName) {
        this._university = university;
        this._course = course;
        this._fullName = fullName;
        this._marks = [];
    }

    getInfo() {
        return `A ${this._course} year student in ${this._university} is ${this._fullName}`;
    }

    get marks()  {
        return this._marks;
    }

    set marks(mark) {
        this._marks.push(mark);
    }

}