'use strict';
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sekolah.db');

class Subject {
  constructor(raw) {
    this.id = raw.id;
    this.subject_name = raw.subject_name;
    this.subject_code = raw.subject_code;
  }

  static findAll() { //must to have
    // let results = models.map(m => new Model(m))
    // return results
    let promise = new Promise((resolve, reject)=>{
      let query = `SELECT * FROM subjects;`;
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

  static findById(id) {
    let promise = new Promise((resolve, reject)=>{
      let query = `SELECT * FROM subjects WHERE id = '${id}';`;
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

  static create( subject_name, subject_code) {
    let promise = new Promise ((resolve, reject)=>{
      let query = `INSERT INTO subjects ( subject_name, subject_code) values( '${subject_name}', '${subject_code}');`;
      db.run(query);
      resolve();
    })
    return promise;
  } //must to have

  static update(id, subject_name, subject_code) {
    let promise = new Promise((resolve, reject)=>{
      let query = `UPDATE subjects SET subject_name = '${subject_name}', subject_code = '${subject_code}' WHERE id='${id}';`;
      db.run(query);
      resolve();
    })
    return promise;
  } //must to have

  static destroy(id) {
    let promise = new Promise((resolve, reject)=>{
      let query = `DELETE FROM subjects WHERE id='${id}';`;
      db.run(query);
      resolve();
    })
    return promise;
  } //must to have

}
