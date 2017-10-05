var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');

class Subject {
  constructor(raw) {
    this.id = raw.id;
    this.subject_name = raw.subject_name;
    this.subject_code = raw.subject_code;
  }

  static findAll() { //must to have
    return new Promise((resolve, reject) => {
      let selectQuery = 'SELECT * FROM subjects';
      db.all(selectQuery, (err, rowsSubject) => {
        if (!err) {
          let result = rowsSubject.map((rowsSubject, index) => {
            return new Subject(rowsSubject);
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

module.exports = Subject;
