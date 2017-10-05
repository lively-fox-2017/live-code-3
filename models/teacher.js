var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');

class Teacher {
  constructor() {

  }

  static findAll() { //must to have
    let promise = new Promise (resolve,reject){
      db.all(`select * from Teachers`,(err,dataTeacher)=>{
        if(!err){
          resolve(dataTeacher)
        }else{
          reject(err)
        }
      })
    }
    return promise
  }

  static findById() {} //must to have

  static findWhere() {} //nice to have

  static create() {} //must to have

  static update() {} //must to have

  static destroy() {} //must to have

}
module.exports = Teacher;
