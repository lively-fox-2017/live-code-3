var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/data.db');

class Subjects{
  constructor(raw) {
    this.subject_name = raw.subject_name
    this.subject_code = raw.subject_code
  }

  // static findAll() { //must to have
  //   let query = ('SELECT * FROM Subjects')
  //   let results = query.map(m => new Model(m))
  //   return results
  // }
  static findAll() { //must to have
    return new Promise((resolve, rejects)=>{
      let query = ('SELECT * FROM Subjects')
      db.all(query,(err, dataSubjects)=>{
        if(!err){
          resolve(dataSubjects)
        } else{
          rejects(err)
          // console.log(err)
        }
      })
    })
  }


  static findById(id) {
    return new Promise((resolve, rejects)=>{
      let query=`SELECT * FROM Subjects where id = ${id}`;
      db.get(query, (err, dataSubject)=>{
        if(!err){
          resolve(dataSubject);
        }
      })
    })
  } //must to have

  static findWhere() {} //nice to have

  static create(dataSubject) {
    return new Promise((resolve, rejects)=>{
      let query = (`INSERT into Subjects(subject_name, subject_code) VALUES ('${dataSubject.subject_name}','${dataSubject.subject_code}')`)
      db.run(query, (err)=>{
        if(!err){
          resolve(null);
        } else {
          rejects(err);
        }
      })
    })
    
  } //must to have

  static update(id, dataSubject) {
    console.log('databos',id)
    return new Promise((resolve, rejects)=>{
      let query = `UPDATE Subjects SET subject_name = '${dataSubject.subject_name}', subject_code = '${dataSubject.subject_code}' WHERE id = ${id}`;
      db.all(query, (err, dataUpdateSubject)=>{
        if(!err){
          console.log('hasil',dataUpdateSubject)
          resolve(null);
        } else{
          console.log('ERRRR',err)
        }
      })
    })
  } //must to have

  static destroy(id) {
    return new Promise((resolve, rejects)=>{
      let query = `DELETE FROM Subjects WHERE id = ${id}`;
      db.all(query,(err, data)=>{
        if(!err){
          resolve(null);
        } else {
          rejects(err);
        }
      })
    })
    
  } //must to have

}

module.exports = Subjects;