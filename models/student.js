var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');
const StudentSubject = require('./studentSubject');
const Subject = require('./subject');

class Student {
  constructor(raw) {
    this.id = raw.id;
    this.first_name = raw.first_name;
    this.last_name = raw.last_name;
    this.email = raw.email;
    this.gender = raw.gender;
    this.subjects = (raw.hasOwnProperty('subjects')) ? raw.subjects : '';
  }

  static findAll() { //must to have
    return new Promise((resolve, reject) => {
      let selectQuery = 'SELECT * FROM students';
      db.all(selectQuery, (err, rowsStudent) => {
        if (!err) {
          let result = rowsStudent.map((rowStudent, index) => {
            return new Student(rowStudent);
          })
          resolve(result);
        } else {
          reject(err);
        }
      })
    });
  }

  static findAllWithSubject() {
    return new Promise((resolve, reject) => {
      this.findAll()
        .then((students) => {
          students.forEach((student, index) => {
            StudentSubject.findByStudentId(student.id)
              .then((studentsubjects) => {
                if (studentsubjects) {
                  let subjectsId = studentsubjects.map((studentsubject) => {
                    return studentsubject.id_subject;
                  })
                  return subjectsId;
                } else
                  return null;
              })
              .then(subjectsId => {
                if (subjectsId) {
                  Subject.findByIds(subjectsId)
                    .then(subjects => {
                      student.subjects = subjects;
                      if (index >= students.length - 1)
                        resolve(students);
                    })
                    .catch(reason => {
                      console.log(reason);
                    })
                }
              })
              .catch(reason => {
                console.log(reason);
              })
          });
        })
        .catch(reason => {
          console.log(reason);
        })
    });
  }

  static findById() {} //must to have

  static findWhere() {} //nice to have

  static create() {} //must to have

  static update() {} //must to have

  static destroy() {} //must to have
}

module.exports = Student;
