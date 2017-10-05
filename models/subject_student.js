const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./data.db');

class Subject_Student {
  constructor(raw) {
    this.id = raw.id
    this.subject_id = raw.subject_id
    this.student_id = raw.student_id
    this.score = raw.score
  }

  static findAll() { //must to have
    var promise = new Promise((resolve, reject)=>{
      db.all('select * from Subject_Student', (err, rows)=>{
        if(err){
          reject(err);
        }
        else{
          if(rows !== undefined) {
            let results = rows.map(m => new Subject_Student(m))
            resolve(results);
          }
          else{
            resolve(rows);
          }
        }
      })
    })
    return promise
  }

  static findById(id) {
    var promise = new Promise((resolve, reject)=>{
      db.get('select * from Subject_Student where id="'+id+'"', (err, rows)=>{
        if(err){
          reject(err);
        }
        else{
          if(rows !== undefined) {
            let results = new Subject_Student(rows);
            resolve(results);
          }
          else{
            resolve(rows);
          }
        }
      })
    })
    return promise
  } //must to have

  static findWhere(id, column) {
    var promise = new Promise((resolve, reject)=>{
      db.all(`select * from Subject_Student where ${column}='${id}'`, (err, rows)=>{
        if(err){
          reject(err);
        }
        else{
          if(rows !== undefined) {
            let results = rows.map(m => new Subject_Student(m))
            resolve(results);
          }
          else{
            resolve(rows);
          }
        }
      })
    })
    return promise
  } //nice to have

  static create(data) {
    var promise = new Promise((resolve, reject)=>{
      db.run(`insert into Subject_Student values(null, '${data.subject_id}', '${data.student_id}', '${data.score}')`, (err)=>{
        if(err) {
          reject(err);
        }
        else{
          resolve(this.id);
        }
      })
    })
    return promise;
  } //must to have

  static update(data) {
    var promise = new Promise((resolve, reject)=>{
      db.run(`update Subject_Student set subject_id ='${data.subject_id}', student_id='${data.student_id}', score='${data.score}' where id='${data.id}'`, (err)=>{
        if(err){
          reject(err);
        }
        else{
          resolve();
        }
      })
    })
    return promise;
  } //must to have

  static destroy(id) {
    var promise = new Promise((resolve, reject)=>{
      db.run(`delete from Subject_Student where id='${id}'`, (err)=>{
        if(err){
          reject(err);
        }
        else{
          resolve(err);
        }
      })
    })
    return promise;
  } //must to have

}

module.exports = Subject_Student;
