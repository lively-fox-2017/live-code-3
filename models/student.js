'use strict';
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sekolah.db');

class Student {
  constructor(raw) {
    this.id = raw.id;
    this.first_name =raw.first_name;
    this.last_name = raw.last_name;
    this.email = raw.email;
    this.gender = raw.gender;
  }

  static findAll() { //must to have
    let promise = new Promise((resolve, reject)=>{
      let query = `SELECT * FROM students;`;
      db.all(query, function(err, rows){
        if(err){
          reject(err);
        }else{
          let result = rows.map((row)=>{new Subject(row)});
          resolve(result);
        }

      })
    })
    return promise;
  }

  static findById() {
    let promise = new Promise((resolve, reject)=>{
      let query = `SELECT * FROM students WHERE id = '${id}';`;
      db.get(query, function(err, row){
        if(err){
          reject(err);
        }else{
          let result = new Subject(row);
          resolve(row)
        }
      })
    })
    return promise;
  } //must to have

  static findWhere() {} //nice to have

  static create( first_name, last_name, email, gender) {
    let promise = new Promise ((resolve, reject)=>{
      let query = `INSERT INTO subjects (first_name, last_name, email, gender) values( '${subject_name}', '${subject_code}');`;
      db.run(query);
      resolve();
    })
    return promise;
  } //must to have

  static update(first_name, last_name, email, gender) {
    let promise = new Promise((resolve, reject)=>{
      let query = `UPDATE subjects SET first_name = '${first_name}', last_name = '${last_name}', email = '${email}', gender = '${gender}' WHERE id='${id}';`;
      db.run(query);
      resolve();
    })
    return promise;
  } //must to have

  static destroy() {
    let promise = new Promise((resolve, reject)=>{
      let query = `DELETE FROM students WHERE id='${id}';`;
      db.run(query);
      resolve();
    })
    return promise;
  } //must to have

}


module.exports = Student;
