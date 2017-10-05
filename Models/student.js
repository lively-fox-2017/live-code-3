const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./livecode.db");

class Student {
  constructor(id, first_name, last_name, email, gender) {
    this.id = id;
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.gender = gender
  }

  static findAll() { //must to have
    return new Promise((resolve, reject) => {
      db.all("select * from Student", (err, rowsStudent) => {
        if (err) {
          reject(err);
        } else {
          let arrStudent = [];
          rowsStudent.forEach((rows) => {
            let objStudent = new Student(rows.id, rows.first_name, rows.last_name, rows.email, rows.gender);
            arrStudent.push(objStudent);
          })
          resolve(arrStudent);
        }
      });
    });
  }

  static findById(id) { //must to have
    return new Promise((resolve, reject) => {
      db.get(`select * from Student where id = "${id}"`, (err, rowsStudentID) => {
        if (err) {
          reject(err);
        } else {
          let objStudent = new Student(rowsStudentID.id, rowsStudentID.first_name, rowsStudentID.last_name, rowsStudentID.email, rowsStudentID.gender);
          resolve(objStudent);
        }
      })
    });
  }

  static findWhere() {

  } //nice to have

  static create(reqBody) {
    return new Promise((resolve, reject) => {
      db.run(`insert into Student (first_name, last_name, email, gender) values ("${reqBody.first_name}", "${reqBody.last_name}", "${reqBody.email}", "${reqBody.gender}")`, () => {
        resolve();
      })
    });
  } //must to have

  static update(reqBody, reqParams) {
    return new Promise((resolve, reject) => {
      db.run(`update Student set first_name = "${reqBody.first_name}", last_name = "${reqBody.last_name}", email = "${reqBody.email}", gender = "${reqBody.gender}" where id = ${reqParams}`, () => {
        resolve();
      })
    });
  } //must to have

  static destroy(id) {
    return new Promise((resolve, reject) => {
      db.run(`delete from Student where id = ${id}`, () => {
        resolve();
      })
    });
  } //must to have

}

module.exports = Student;
