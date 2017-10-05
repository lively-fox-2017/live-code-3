var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./data.db');

class Students {
  constructor() {
    // this.attribute1 = raw.attribute1
    // this.attribute2 = raw.attribute2
  }

  static findAll() { //must to have
    // let results = models.map(m => new Model(m))
    // return results
    return new Promise((resolve, reject) => {
      db.all('select * from Students;', (err, Students) =>{
        console.log(Students);
        resolve(Students)
      })
    });

  }

  static findById(id_student) {
    return new Promise((resolve, reject) => {
      db.get('select * from Students where id = (?)', id_student, (err, student) =>{
        resolve(student)
      })
    });
  } //must to have

  static findWhere() {} //nice to have

  static create(firts_name, last_name, email, gender) {
    return new Promise((resolve, reject) => {
      db.run('insert into Students (firs_name, last_name, email, gender) values (?, ?, ?, ?)', firts_name, last_name, email, gender, err =>{
        if(err){
          reject(err)  
        }
      })
    });
  } //must to have

  static update(id, firts_name, last_name, email, gender) {
    return new Promise((resolve, reject) => {
      db.run('update Students set firs_name = (?), last_name = (?), email = (?), gender = (?) where id = (?)', firts_name, last_name, email, gender, id, err =>{
        if(err){
          reject(err)  
        }
      })
    });
  } //must to have

  static destroy(id) {
    return new Promise((resolve, reject) => {
      db.run('delete from Students where id = (?)', id, err =>{
        if(err){
          reject(err)
        }
      });
   })   
  } //must to have

}

module.exports = Students