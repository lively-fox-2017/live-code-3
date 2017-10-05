const Student = require('../models/student');

class StudentCtrl {
  static getStudents() {
    Student.findAllWithSubject()
      .then(students => {
        console.log(students);
      })
      .catch(reason => {
        console.log(reason);
      })
  }
}

module.exports = StudentCtrl;
