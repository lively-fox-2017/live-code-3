'use strict';
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sekolah.db');
const StudentSubjectRelations = require('../models/student-subject-relations');
const Subject = require('../models/subject');

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
          let result = rows.map((row)=>{return new Student(row)});
          //console.log(rows);
          resolve(result);
        }

      })
    })
    return promise;
  }

  static findById(id) {
    let promise = new Promise((resolve, reject)=>{
      let query = `SELECT * FROM students WHERE id = '${id}';`;
      db.get(query, function(err, row){
        if(err){
          reject(err);
        }else{
          let result = new Student(row);
          resolve(row)
        }
      })
    })
    return promise;
  } //must to have

  static findWhere(student_id) {
    let promise = new Promise((resolve, reject)=>{
      StudentSubjectRelations.findWhere('student_id', student_id).then((rows)=>{
        
        resolve()
      })
    })
    return promise;
  } //nice to have

  static create( first_name, last_name, email, gender) {
    let promise = new Promise ((resolve, reject)=>{
      let query = `INSERT INTO students (first_name, last_name, email, gender) values( '${first_name}', '${last_name}', '${email}', '${gender}');`;
      db.run(query);
      resolve();
    })
    return promise;
  } //must to have

  static update(id ,first_name, last_name, email, gender) {
    let promise = new Promise((resolve, reject)=>{
      console.log(id);
      let query = `UPDATE students SET first_name = '${first_name}', last_name = '${last_name}', email = '${email}', gender = '${gender}' WHERE id='${id}';`;
      db.run(query);
      resolve();
    })
    return promise;
  } //must to have

  static destroy(id) {
    let promise = new Promise((resolve, reject)=>{
      console.log('isad');
      let query = `DELETE FROM students WHERE id='${id}';`;
      db.run(query);
      resolve();
    })
    return promise;
  } //must to have

}


module.exports = Student;
