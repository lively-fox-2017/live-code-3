var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');

class StudentSubject {
  constructor(raw) {
    this.id = raw.id;
    this.id_student = raw.id_student;
    this.id_subject = raw.id_subject;
  }

  static findAll() { //must to have
    return new Promise((resolve, reject) => {
      let selectQuery = 'SELECT * FROM students_subjects';
      db.all(selectQuery, (err, rowsStudentSubject) => {
        if (!err) {
          let result = rowsStudentSubject.map((rowStudentSubject, index) => {
            return new Subject(rowStudentSubject);
          })
          resolve(result);
        } else {
          reject(err);
        }
      })
    });
  }

  static findByStudentId(id_student) {
    return new Promise((resolve, reject) => {
      let selectQuery = 'SELECT * FROM students_subjects WHERE id_student = $id_student';
      db.all(selectQuery, {
        $id_student: parseInt(id_student)
      }, (err, rowsStudentSubject) => {
        if (!err) {
          if (rowsStudentSubject) {
            let result = rowsStudentSubject.map(rowStudentSubject => {
              return new StudentSubject(rowStudentSubject);
            })
            resolve(result);
          } else {
            resolve(null);
          }
        } else {
          reject(err);
        }
      })
    });
  } //must to have

  static findWhere() {} //nice to have

  static create() {} //must to have

  static update() {} //must to have

  static destroy() {} //must to have
}

module.exports = StudentSubject;
