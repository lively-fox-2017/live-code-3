var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('../data.db');

class Subjects {
  constructor() {
    // this.attribute1 = raw.attribute1
    // this.attribute2 = raw.attribute2
  }

  static findAll() { //must to have
    // let results = models.map(m => new Model(m))
    // return results
    return new Promise((resolve, reject) => {
      db.all('select * from Subjects;', (err, Subjects) =>{
        console.log(Subjects);
        resolve(Subjects)
      })
    });

  }

  static findById(id) {
    return new Promise((resolve, reject) => {
      db.get('select * from Subjects where id = (?)', id, (err, subject) =>{
        resolve(subject)
      })
    });
  } //must to have

  static findWhere() {} //nice to have

  static create(sub_name, sub_code) {
    return new Promise((resolve, reject) => {
      db.run('insert into Subjects (subject_name, subject_code) values (?, ?)', sub_name, sub_code, err =>{
        if(err){
          reject(err)  
        }
      })
    });
  } //must to have

  static update(id, sub_name, sub_code) {
    return new Promise((resolve, reject) => {
      db.run('update Subjects set subject_name = (?), subject_code = (?) where id = (?)', sub_name, sub_code, id, err =>{
        if(err){
          reject(err)  
        }
      })
    });
  } //must to have

  static destroy(id) {
    return new Promise((resolve, reject) => {
      db.run('delete from Subjects where id = (?)', id, err =>{
        if(err){
          reject(err)
        }
      });
   })   
  } //must to have

}

module.exports = Subjects