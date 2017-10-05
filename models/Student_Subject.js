const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('school.db');

const Student = require('./Student');
const Subject = require('./Subject');

class Student_Subject {

  constructor(obj) {
    this.id = obj.id;
    this.student_id = obj.student_id;
    this.subject_id = obj.subject_id;
    this.score = obj.score
  }

  static fetchAll() {

    const fetchAllStudentSubject = new Promise((resolve, reject) => {

      db.all(`SELECT * FROM students_subjects`, (err, studentsSubjects) => {

        resolve(studentsSubjects);

      });

    });

    return Promise.resolve(fetchAllStudentSubject);

  }

  static fetchByStudentId(studentId) {

    const fetchStudentSubjectByStudentId = new Promise((resolve, reject) => {

      db.all(`SELECT * FROM students_subjects WHERE student_id = ${studentId}`, (err, studentSubject) => {

        resolve(studentSubject);

      });

    });

    return Promise.resolve(fetchStudentSubjectByStudentId);

  }

  static fetchSubjectAssigned(studentId) {

    const fetchSubjects = Promise.all([
      Student.fetchById(studentId),
      Subject.fetchAll(),
      Student_Subject.fetchByStudentId(studentId)
    ]).then((values) => {

      let student = values[0];
      let subjects = values[1];
      let studentSubjects = values[2];
      let thisSubjects = [];

      studentSubjects.forEach((studentSubject) => {
        subjects.forEach((subject) => {
          if (subject.id === studentSubject.subject_id)
            thisSubjects.push(subject);
        });
      });

      return thisSubjects;

    });

    return Promise.resolve(fetchSubjects);

  }

}

module.exports = Student_Subject;