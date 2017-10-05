var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/database.db');

class Subject {
  constructor() {

  }
  static findAll() {
      let promise = new Promise(function(resolve,reject) {
        db.all(`SELECT * FROM Subjects`, (err,dataSubject) => {
          if (!err) {
            resolve(dataSubject)
          } else {
            reject(err)
          }
        })
      })
      return promise
    }

  static findById(req) {
    let promise = new Promise(function(resolve,reject) {
      db.all(`SELECT * FROM Subjects WHERE id = ${req.params.id}`, (err,dataSubject) => {
        if (!err) {
          resolve(dataSubject)
        } else {
          reject(err)
        }
      })
    })
    return promise
  }

  static createSubject(req) {
    let promise = new Promise(function(resolve,reject) {
      db.run(`INSERT INTO Subjects (subject_name,subject_code)
      VALUES ('${req.body.subject_name}','${req.body.subject_code}' )`, (err,dataSubject) => {
        if (!err) {
          resolve(dataSubject)
        } else {
          reject(err)
        }
      })
    })
    return promise
  }

  static deleteSubject(req) {
    let promise = new Promise(function(resolve,reject) {
      db.run(`DELETE FROM Subjects WHERE id = ${req.params.id}`, (err,dataSubject) => {
        if (!err) {
          resolve(dataSubject)
        } else {
          reject(err)
        }
      })
    })
    return promise
  }

  static updateSubject(req) {
    let promise = new Promise(function(resolve,reject) {
      db.run(`UPDATE Subjects SET subject_name = '${req.body.subject_name}', subject_code = '${req.body.subject_code}'
       WHERE id = ${req.params.id}`, (err,dataSubject) => {
        if (!err) {
          resolve(dataSubject)
        } else {
          reject(err)
        }
      })
    })
    return promise
  }

}

module.exports = Subject
