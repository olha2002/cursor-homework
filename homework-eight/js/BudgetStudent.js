class BudgetStudent extends Student {
  constructor(university, course, fullName, scholarship) {
    super(university, course, fullName);
    this._scholarship = scholarship;
    this.getScholarship();
  }

  getScholarship() {
    setInterval(() => {
      if (this._student && this.getAverageMark() >= 4) {
        console.log(`You've got ${this._scholarship} of your scholarsip!`);
      }
    }, "30000");
  }
}
