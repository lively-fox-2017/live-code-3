const Student = require('../models/student');

class StudentCtrl {
  static getStudents(req, res) {
    Student.findAllWithSubject()
      .then(students => {
        let data = students.map(student => {
          let subjects = '';
          if (student.subjects.length > 0) {
            student.subjects.forEach((subject, index) => {
              if (index != student.subjects.length - 1)
                subjects += subject.subject_name + ', ';
              else
                subjects += subject.subject_name
            })
          }
          student.subjectsStr = subjects;
          return student
        })
        res.render('students', {
          students: data
        });
      })
      .catch(reason => {
        console.log(reason);
      })
  }
}

module.exports = StudentCtrl;
