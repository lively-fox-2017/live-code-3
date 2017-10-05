


var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/data.db');


class Subject {
  constructor() {

  }

  static findAll (){
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM Subjects`, (err,rowSubject)=>{
        console.log(rowSubject);
      if(!err){
        resolve(rowSubject)
      }else{
        reject(err)
      }
      })
    })
  }

}


module.exports = Subject
