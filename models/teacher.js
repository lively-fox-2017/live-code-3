const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');

class Teacher {
  constructor(){

  }
  static findAll(){
    let getAll = new Promise((resolve,reject)=>{
    db.all(`SELECT * FROM Teacher`, function(err,dataTeachers){
      if(!err){
        resolve(dataTeachers)
      } else {
        reject(err)
      }
      })
    })
    return getAll;
  }

  static add(req){
    let add = new Promise((resolve,reject)=>{
      db.run(`INSERT INTO Teacher (first_name,last_name,email,gender) VALUES ('${req.body.first_name}','${req.body.last_name}','${req.body.email}','${req.body.gender}')`,(err)=>{
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
      db.run(`DELETE FROM Teacher WHERE id = '${req.params.id}'`, (err)=>{
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
      db.all(`SELECT * FROM Teacher WHERE id = '${req.params.id}'`, function(err,dataTeachers){
        if(!err){
          resolve(dataTeachers)
        } else {
          reject(err)
        }
      })
    })
    return findId;
  }

  static Update(req){
    let edit = new Promise((resolve,reject)=>{
      db.run(`UPDATE Teacher SET first_name='${req.body.first_name}',last_name='${req.body.last_name}',email='${req.body.email}',gender='${req.body.gender}' WHERE id = '${req.params.id}'`, (err)=>{
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
module.exports = Teacher
