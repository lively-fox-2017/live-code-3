const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./livecode.db");

class Subject {
  constructor(id, subject_name, subject_code) {
    this.id = id;
    this.subject_name = subject_name
    this.subject_code = subject_code
  }

  static findAll() { //must to have
    return new Promise((resolve, reject) => {
      db.all("select * from Subject", (err, rowsSubject) => {
        if (err) {
          reject(err);
        } else {
          let arrSubject = [];
          rowsSubject.forEach((rows) => {
            let objSubject = new Subject(rows.id, rows.subject_name, rows.subject_code);
            arrSubject.push(objSubject);
          })
          resolve(arrSubject);
        }
      });
    });
  }

  static findById(id) { //must to have
    return new Promise((resolve, reject) => {
      db.get(`select * from Subject where id = "${id}"`, (err, rowsSubjectID) => {
        if (err) {
          reject(err);
        } else {
          let objSubject = new Subject(rowsSubjectID.id, rowsSubjectID.subject_name, rowsSubjectID.subject_code);
          resolve(objSubject);
        }
      })
    });
  }

  static findWhere() {

  } //nice to have

  static create(reqBody) {
    return new Promise((resolve, reject) => {
      db.run(`insert into Subject (subject_name, subject_code) values ("${reqBody.subject_name}", "${reqBody.subject_code}")`, () => {
        resolve();
      })
    });
  } //must to have

  static update(reqBody, reqParams) {
    return new Promise((resolve, reject) => {
      db.run(`update Subject set subject_name = "${reqBody.subject_name}", subject_code = "${reqBody.subject_code}" where id = ${reqParams}`, () => {
        resolve();
      })
    });
  } //must to have

  static destroy(id) {
    return new Promise((resolve, reject) => {
      db.run(`delete from Subject where id = ${id}`, () => {
        resolve();
      })
    });
  } //must to have

}

module.exports = Subject;
