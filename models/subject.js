var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');


class Subject {
  constructor(raw) {
    this.attribute1 = raw.attribute1
    this.attribute2 = raw.attribute2
  }

  static findAll() { //must to have
    let promise = new Promise (function(resolve,reject){
      db.all(`select * from Students`,(err,dataSubject)=>{
        if(!err){
          resolve(dataSubject)
        }else{
          reject(err)
        }
      })
    })
    return promise
  }

  static findById() {} //must to have

  static findWhere() {} //nice to have

  static create() {} //must to have

  static update() {} //must to have

  static destroy() {} //must to have

}
module.exports = Subject;
