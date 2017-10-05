var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');

class Student {
  constructor(raw) {
    this.id = raw.id;
    this.first_name = raw.first_name;
    this.last_name = raw.last_name;
    this.email = raw.email;
    this.gender = raw.gender;
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

  static findById() {} //must to have

  static findWhere() {} //nice to have

  static create() {} //must to have

  static update() {} //must to have

  static destroy() {} //must to have
}

module.exports = Student;
