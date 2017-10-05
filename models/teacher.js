const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

class Teacher {
  // constructor(raw) {
  //   this.attribute1 = raw.attribute1
  //   this.attribute2 = raw.attribute2
  // }

  static findAll() { //must to have
    return new Promise(function(resolve,reject){
      db.all(`SELECT * FROM Teacher`, function(err,data){
        if (!err) {
          resolve(data)
        } else {
          reject(err);
        }
      })
    })
  }

  static findById(id) {
    return new Promise(function(resolve,reject){
      db.each(`SELECT * FROM Teacher WHERE id=${id}`, function(err,data){
        if (!err) {
          resolve(data)
        } else {
          reject(err);
        }
      })
    })
  } //must to have

  static findWhere() {} //nice to have
//,'${data.Subject_Id}
  static create(data) {
    console.log(data);
    return new Promise(function(resolve,reject){
      db.run(`INSERT INTO Teacher(first_name,last_name,email,gender) VALUES('${data.first_name}','${data.last_name}','${data.email}','${data.gender}')`, function(err,result){
        if (!err) {
          resolve(this)
        } else {
          reject(err);
        }
      })
    })
  } //must to have

  static update(data,id) {
    // ,Subject_Id=${data.Subject_Id}
    return new Promise(function(resolve,reject){
      db.run(`UPDATE Teacher SET first_name='${data.first_name}',last_name='${data.last_name}',email='${data.email}',gender='${data.gender}' WHERE id='${id}'`, function(err,result){
        if (!err) {
          resolve()
        } else {
          reject(err);
        }
      })
    })
  } //must to have

  static destroy(id) {
    return new Promise(function(resolve,reject){
      db.run(`DELETE FROM Teacher WHERE id=${id}`, function(err,result){
        if (!err) {
          resolve(this)
        } else {
          reject(err);
        }
      })
    })
  } //must to have

}

module.exports = Teacher
