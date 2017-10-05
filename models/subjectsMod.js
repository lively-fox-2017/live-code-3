let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('data.db');
let bodyParser = require('body-parser')

class Subjects {
  constructor(id,subject_code,subject_name) {
    this.id = id;
    this.subject_code = subject_code;
    this.subject_name = subject_name;
  }

  static findAll() { //must to have
    return new Promise(function(resolve,reject){
      db.all(`SELECT * FROM subjects`,function(err,dataJsonSubjects){
        if(err){
          reject(err);
        }
        else{
          let result = [];
          for(let i = 0; i < dataJsonSubjects.length; i++){
            let subjects = new Subjects(dataJsonSubjects[i].id,dataJsonSubjects[i].subject_code,dataJsonSubjects[i].subject_name);
            result.push(subjects)
          }
          resolve(result);
        }
      })
    })
  }

  static findById(req) {
    return new Promise(function(resolve,reject){
      db.all(`SELECT * FROM subjects WHERE id = ${req.params.id}`,function(err,dataJsonSubjects){
        if(err){
          reject(err)
        }
        else{
          resolve(dataJsonSubjects)
        }
      })
    })
  } //must to have

  static findWhere() {} //nice to have

  static create(req) {
    return new Promise(function(resolve,reject){
      db.run(`INSERT INTO subjects (subject_code,subject_name) VALUES ('${req.body.subject_code}','${req.body.subject_name}')`,function(err,dataJsonSubjects){
        if(err){
          reject(err);
        }
        else{
          resolve(dataJsonSubjects)
        }
      })
    })
  } //must to have

  static update(req) {
    return new Promise(function(resolve,reject){
      db.run(`UPDATE subjects SET subject_code = '${req.body.subject_code}', subject_name = '${req.body.subject_name}' WHERE id = ${req.params.id}`,function(err,dataJsonSubjects){
        if(err){
          reject(err)
        }
        else{
          resolve(dataJsonSubjects)
        }
      })
    })
  } //must to have

  static destroy(req) {
    return new Promise(function(resolve,reject){
      db.run(`DELETE FROM subjects WHERE id = ${req.params.id}`,function(err){
        if(err){
          reject(err)
        }
        else{
          resolve()
        }
      })
    })
  } //must to have

}

module.exports = Subjects
