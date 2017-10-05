const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

class Subject {
  // constructor(raw) {
  //   this.attribute1 = raw.attribute1
  //   this.attribute2 = raw.attribute2
  // }

  static findAll() { //must to have
    return new Promise(function(resolve,reject){
      db.all("SELECT * FROM Subject", function(err,data){
        if (!err) {
          console.log(data);
          resolve(data)
        } else {
          reject(err);
        }
      })
    })
  }

  static findById() {} //must to have

  static findWhere() {} //nice to have

  static create() {
    return new Promise(function(resolve,reject){
      db.run(`INSERT INTO Subject(subject_name,subject_code) VALUES('${data.subject_name}','${data.Subject_code}')`, function(err,result){
        if (!err) {
          resolve(this)
        } else {
          reject(err);
        }
      })
    })
  } //must to have

  static update() {} //must to have

  static destroy() {} //must to have

}

module.exports = Subject
