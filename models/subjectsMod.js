let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('data.db')

class Subjects {
  constructor() {
    this.id = id;
    this.subject_code = subject_code;
    this.subject_name = subject_name;
  }

  static findAll() { //must to have
    return new Promise(function(resolve,reject){
      db.run(`SELECT * FROM subjects`,function(err,dataJsonSubjects){
        if(err){
          reject(err);
        }
        else{
          let result = [];
          for(let i = 0; i < dataJsonSubjects.length; i++){
            let subjects = new Subjects(dataJsonSubjects[i].id,)
          }
        }
      })
    })
  }

  static findById() {} //must to have

  static findWhere() {} //nice to have

  static create() {} //must to have

  static update() {} //must to have

  static destroy() {} //must to have

}

module.exports = Subjects
