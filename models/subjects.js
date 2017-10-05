const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/data.db');

class ModelSubjects {
  static findAll(){
    return new Promise(function(resolve, reject) {
      db.all(`SELECT * FROM subjects`, (err, rowsSubjects)=>{
        if (!err) {
          resolve(rowsSubjects)
        }else {
          reject(err)
        }
      })
    })
  }

  static create(body){
    return new Promise(function(resolve, reject) {
      db.run(`insert into subjects (subject_name, subject_code) values ('${req.body.subject_name}','${req.body.subject_code}')`,(err)=>{
        if (!err) {
          resolve()
        }else {
          reject(err)
        }
      })
    })
  }

  static findById(params){
    return new Promise(function(resolve, reject) {
      db.all(`SELECT * FROM subjects WHERE id = ${params}`,(err, rowsSubjects)=>{
        if (!err) {
          resolve(rowsSubjects)
        }else {
          reject(err)
        }
      })
    })
  }

  static update(body, params){
    return new Promise(function(resolve, reject) {
      db.run(`UPDATE FROM subjects SET subject_name = '${req.body.subject_name}', subject_code = '${req.body.subject_code}' WHERE id = ${params}`, (err)=>{
        if (!err) {
          resolve()
        }else {
          reject(err)
        }
      })
    })
  }

  static destroy(params){
    return new Promise(function(resolve, reject) {
      db.run(`DELETE FROM subjects WHERE id = ${params}`, (err)=>{
        if (!err) {
          resolve()
        }else {
          reject(err)
        }
      })
    })
  }

}

module.exports = ModelSubjects;