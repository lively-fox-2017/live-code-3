var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');

class Teacher {
  constructor() {

  }

  static findAll() { //must to have
    let promise = new Promise (function(resolve,reject){
      db.all(`select * from Teachers`,(err,dataTeacher)=>{
        if(!err){
          resolve(dataTeacher)
        }else{
          reject(err)
        }
      })
    })
    return promise
  }

  static findById() {
    let promise = new Promise (function(resolve,reject){
      db.all(`select * from Teachers where id={req.params.id}`,(err,dataTeacher)=>{
        if(!err){
          resolve(dataTeacher)
        }else{
          reject(err)
        }
      })
    })
    return promise //must to have
  }
  static findWhere() {} //nice to have

  static create(req) {
    let promise = new Promise (function(resolve,reject){
      db.all(`insert into Teachers(first_name,last_name,email,gender)
       values ('${req.body.first_name}',
       '${req.body.last_name}',
       '${req.body.email}',
       '${req.body.gender}')`,(err,dataTeacher)=>{
        if(!err){
          resolve(dataTeacher)
        }else{
          reject(err)
        }
      })
    })
    return promise
  } //must to have

  static update() {
    let promise = new Promise (function(resolve,reject){
      db.all(`update Teachers set
        first_name='${req.body.first_name}',
       last_name'${req.body.last_name}',
       email='${req.body.email}',
       gender='${req.body.gender}' where id=${req.params.id})`,(err,dataTeacher)=>{
        if(!err){
          resolve(dataTeacher)
        }else{
          reject(err)
        }
      })
    })
    return promise
  } //must to have

  static destroy() {} //must to have

}
module.exports = Teacher;
