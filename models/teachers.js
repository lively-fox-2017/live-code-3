var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/database.db');

class Teacher {
  constructor() {

  }
  static findAll() {
      let promise = new Promise(function(resolve,reject) {
        db.all(`SELECT * FROM Teachers`, (err,dataTeacher) => {
          if (!err) {
            resolve(dataTeacher)
          } else {
            reject(err)
          }
        })
      })
      return promise
    }

  static findById(req) {
    let promise = new Promise(function(resolve,reject) {
      db.all(`SELECT * FROM Teachers WHERE id = ${req.params.id}`, (err,dataTeacher) => {
        if (!err) {
          resolve(dataTeacher)
        } else {
          reject(err)
        }
      })
    })
    return promise
  }

  static createTeacher(req) {
    let promise = new Promise(function(resolve,reject) {
      db.run(`INSERT INTO Teachers (first_name,last_name,email,gender,id_subject)
      VALUES ('${req.body.first_name}','${req.body.last_name}', '${req.body.email}', '${req.body.gender}', '${req.body.id_teacher}')`, (err,dataTeacher) => {
        if (!err) {
          resolve(dataTeacher)
        } else {
          reject(err)
        }
      })
    })
    return promise
  }

  static deleteTeacher(req) {
    let promise = new Promise(function(resolve,reject) {
      db.run(`DELETE FROM Teachers WHERE id = ${req.params.id}`, (err,dataTeacher) => {
        if (!err) {
          resolve(dataTeacher)
        } else {
          reject(err)
        }
      })
    })
    return promise
  }

  static updateTeacher(req) {
    let promise = new Promise(function(resolve,reject) {
      db.run(`UPDATE Teachers SET first_name = '${req.body.first_name}', last_name = '${req.body.last_name}',
       email = '${req.body.email}', gender = '${req.body.gender}', id_subject = '${req.body.id_subject}' WHERE id = ${req.params.id}`, (err,dataTeacher) => {
        if (!err) {
          resolve(dataTeacher)
        } else {
          reject(err)
        }
      })
    })
    return promise
  }

}

module.exports = Teacher
