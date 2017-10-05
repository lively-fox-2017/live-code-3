const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

class Subject {
  // constructor(raw) {
  //   this.attribute1 = raw.attribute1
  //   this.attribute2 = raw.attribute2
  // }

  static findAll() { //must to have
    return new Promise(function(resolve,reject){
      db.all(`SELECT * FROM Subject`, function(err,data){
        if (!err) {
          resolve(data)
        } else {
          reject(err);
        }
      })
    })
  }

  static findById(id) {
    return new Promise(function(resolve,reject){
      db.each(`SELECT * FROM Subject WHERE id=${id}`, function(err,data){
        if (!err) {
          resolve(data)
        } else {
          reject(err);
        }
      })
    })
  } //must to have

  static findWhere() {} //nice to have

  static create(data) {
    return new Promise(function(resolve,reject){
      db.run(`INSERT INTO Subject(subject_name,subject_code) VALUES('${data.subject_name}','${data.subject_code}')`, function(err,result){
        if (!err) {
          resolve(this)
        } else {
          reject(err);
        }
      })
    })
  } //must to have

  static update(data,id) {
    // console.log(data,id);
    return new Promise(function(resolve,reject){
      db.run(`UPDATE Subject SET subject_name='${data.subject_name}',subject_code='${data.subject_code}' WHERE id=${id}`, function(err,result){
        if (!err) {
          resolve()
        } else {
          reject(err);
        }
      })
    })
  } //must to have

  static destroy(id) {
    return new Promise(function(resolve,reject){
      db.run(`DELETE FROM Subject WHERE id=${id}`, function(err,result){
        if (!err) {
          resolve(this)
        } else {
          reject(err);
        }
      })
    })
  } //must to have

}

module.exports = Subject
