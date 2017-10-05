const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');

class Subject {
  constructor(){

  }
  static findAll(){
    let getAll = new Promise((resolve,reject)=>{
    db.all(`SELECT * FROM subject`, function(err,dataSubject){
      if(!err){
        resolve(dataSubject)
      } else {
        reject(err)
      }
      })
    })
    return getAll;
  }

  static add(req){
    let add = new Promise((resolve,reject)=>{
      db.run(`INSERT INTO Subject (subject_name,subject_code) VALUES ('${req.body.subject_name}','${req.body.subject_code}')`, (err)=>{
        if(!err){
          resolve()
        } else {
          reject(err)
        }
      })
    })
    return add;
  }

  static delete(req){
    let del = new Promise((resolve,reject)=>{
      db.run(`DELETE FROM Subject WHERE id='${req.params.id}'`, function(err){
        if(!err){
          resolve()
        } else {
          reject(err)
        }
      })
    })
    return del;
  }

  static findById(req){
    let findId = new Promise((resolve,reject)=>{
      db.all(`SELECT * FROM Subject WHERE id = '${req.params.id}'`, function(err,dataSubjects){
        if(!err){
          resolve(dataSubjects)
        } else {
          reject(err)
        }
      })
    })
    return findId;
  }

  static Update(req){
    let edit = new Promise((resolve,reject)=>{
      db.run(`UPDATE Subject SET subject_name='${req.body.subject_name}',subject_code='${req.body.subject_code}' WHERE id = '${req.params.id}'`, (err)=>{
        if(!err){
          resolve()
        } else {
          reject(err)
        }
      })
    })
    return edit;
  }

}


module.exports = Subject
