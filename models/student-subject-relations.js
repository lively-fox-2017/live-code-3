'use strict';
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sekolah.db');

class StudentSubjectRelation {
  constructor(raw) {
    this.id = raw.id;
    this.student_id = raw.student_id;
    this.subject_id = raw.subject_id;
    this.score= raw.score;

  }

  static findAll() { //must to have
    // let results = models.map(m => new Model(m))
    // return results
    let promise = new Promise((resolve, reject)=>{
      let query = `SELECT * FROM student_subject_relations;`;
      db.all(query, function(err, rows){
        if(err){
          reject(err);
        }else{
          let result = rows.map((row)=>{return new StudentSubjectRelation(row)});
          console.log(result);
          resolve(result);
        }

      })
    })
    return promise;
  }

  static findById(id) {
    let promise = new Promise((resolve, reject)=>{
      let query = `SELECT * FROM student_subject_relations WHERE id = '${id}';`;
      db.get(query, function(err, row){
        if(err){
          reject(err);
        }else{
          let result = new StudentSubjectRelation(row);
          resolve(row)
        }
      })
    })
    return promise;
  } //must to have

  static findWhere() {} //nice to have

  static create( student_id, subject_id, score) {
    let promise = new Promise ((resolve, reject)=>{
      let query = `INSERT INTO student_subject_relations ( student_id, subject_id, score) values( '${student_id}', '${subject_id}'), '${score}';`;
      db.run(query);
      resolve();
    })
    return promise;
  } //must to have

  static update(id, student_id, subject_id, score) {
    let promise = new Promise((resolve, reject)=>{
      let query = `UPDATE student_subject_relations SET student_id = '${student_id}', subject_id = '${subject_id}', score = '${score}' WHERE id='${id}';`;
      db.run(query);
      resolve();
    })
    return promise;
  } //must to have

  static destroy(id) {
    let promise = new Promise((resolve, reject)=>{
      let query = `DELETE FROM student_subject_relations WHERE id='${id}';`;
      db.run(query);
      resolve();
    })
    return promise;
  } //must to have

}

module.exports = StudentSubjectRelation;
