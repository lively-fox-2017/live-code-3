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

}

module.exports = ModelSubjects;
