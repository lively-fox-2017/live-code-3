


var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/data.db');


class Subject {
  constructor() {

  }

  static findAll (){
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM Subjects`, (err,rowSubject)=>{
        //console.log(rowSubject);
      if(!err){
        resolve(rowSubject)
      }else{
        reject(err)
      }
      })
    })
  }

  static findById(params){
    return new Promise ((resolve, reject)=>{
      db.each(`SELECT * FROM Subjects WHERE id = ${params.id}`, (err, rowSubject)=>{
        if(!err){
          resolve(rowSubject)
        }
      })
    })
  }

  static create(body){
    return new Promise ((resolve, reject)=>{
      db.all(`INSERT INTO Subjects (subject_name, subject_code) VALUES ('${body.subject_name}', '${body.subject_code}')
      `, (err, rowSubject)=>{
        if(!err){
          resolve(rowSubject)
        }else{
          reject(err)
        }
      })
    })
  }
  //
  // static update(){
  //   return new Promise ((resolve, reject)=>{
  //     db.all (`UDPATE Subject SET subject_name = '${req.body.subject_name}',
  //     subject_code =  '${req.body.subject_code}'
  //     WHERE id = {req.params.id}` (err, subjectRow)=>{
  //       if(!err){
  //         resolve(subjectRow)
  //       }else{
  //         reject(err)
  //       }
  //     })
  //   })
  // }
//
//   UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;




}


module.exports = Subject
