const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./data.db');
const Student = require('./student.js');
const Subject_Student = require('./subject_student.js');

class Subject {
  constructor(raw) {
    this.id = raw.id
    this.subject_name = raw.subject_name
    this.subject_code = raw.subject_code
  }

  static findAll() { //must to have
    var promise = new Promise((resolve, reject) => {
      db.all('select * from Subject', (err, rows) => {
        if (err) {
          reject(err);
        } else {
          if (rows !== undefined) {
            let results = rows.map(m => new Subject(m))
            resolve(results);
          } else {
            resolve(rows);
          }
        }
      })
    })
    return promise
  }

  static findById(id) {
    var promise = new Promise((resolve, reject) => {
      db.get('select * from Subject where id="' + id + '"', (err, rows) => {
        if (err) {
          reject(err);
        } else {
          if (rows !== undefined) {
            let results = new Subject(rows);
            resolve(results);
          } else {
            resolve(rows);
          }
        }
      })
    })
    return promise
  } //must to have

  static findWhere(id, column) {
    var promise = new Promise((resolve, reject)=>{
      db.all(`select * from Subject where ${column}='${id}'`, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          if (rows !== undefined) {
            let results = rows.map(m => new Subject(m))
            resolve(results);
          } else {
            resolve(rows);
          }
        }
      })
    })
    return promise
  } //nice to have

  static create(data) {
    var promise = new Promise((resolve, reject) => {
      db.run(`insert into Subject values(null, '${data.subject_name}', '${data.subject_code}')`, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(this.id);
        }
      })
    })
    return promise;
  } //must to have

  static update(data) {
    var promise = new Promise((resolve, reject) => {
      db.run(`update Subject set subject_name ='${data.subject_name}', subject_code='${data.subject_code}' where id='${data.id}'`, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      })
    })
    return promise;
  } //must to have

  static destroy(id) {
    var promise = new Promise((resolve, reject) => {
      db.run(`delete from Subject where id='${id}'`, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(err);
        }
      })
    })
    return promise;
  } //must to have
  static generateSubjectTable() {
    var promise = new Promise((resolve, reject)=>{
      Subject.findAll().then((rows)=>{
        var arr_prom = [];
        rows.forEach((row)=>{
          arr_prom.push(Subject.getAllStudent(row));
        })
        Promise.all(arr_prom).then((results)=>{
          resolve(results);
        })
      })
    })
    return promise;
  }
  static getAllStudent(subject) {
    var promise = new Promise((resolve, reject)=>{
      subject['student'] = "";
      Subject_Student.findWhere(subject.id, 'Subject_ID').then((rows)=>{
        var allStudent = rows.map((row)=>{return row.subject_id});
        var student_arr = [];
        allStudent.forEach((student)=>{
          student_arr.push(student);
        })
        Promise.all(student_arr).then((student)=>{
          Student.findById(student).then((data)=>{
            if(data !== undefined) {
              subject['student'] += data.fullName() + ", ";
            }
            resolve(subject);
          })
        })
      })
    })
    return promise;
  }
}

module.exports = Subject;
