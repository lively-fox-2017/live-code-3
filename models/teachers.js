const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/data.db');

class ModelTeachers {
  static findAll(){
    return new Promise(function(resolve, reject) {
      db.all(`SELECT * FROM teachers T JOIN subjects S on S.id = T.subjectsid `, (err, rowsTeachers)=>{
        if (!err) {
          resolve(rowsTeachers)
        }else {
          reject(err)
        }
      })
    })
  }

  static create(body){
    return new Promise(function(resolve, reject) {
      db.run(`insert into teachers (first_name, last_name, email, gender, subjectsid) values ('${req.body.first_name}','${req.body.last_name}', '${req.body.email}','${req.body.gender}',${req.body.subjectsid})`,(err)=>{
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
      db.all(`SELECT * FROM teachers T JOIN subjects S on S.id = T.subjectsid WHERE T.id = ${params}`,(err, rowsTeachers)=>{
        if (!err) {
          resolve(rowsTeachers)
        }else {
          reject(err)
        }
      })
    })
  }

  static update(body, params){
    return new Promise(function(resolve, reject) {
      db.run(`UPDATE FROM teachers SET subject_name = '${req.body.subject_name}', subject_code = '${req.body.subject_code}' WHERE id = ${params}`, (err)=>{
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
      db.run(`DELETE FROM teachers WHERE id = ${params}`, (err)=>{
        if (!err) {
          resolve()
        }else {
          reject(err)
        }
      })
    })
  }

}

module.exports = ModelTeachers;
