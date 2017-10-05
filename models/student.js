const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./data.db');

class Student {
  constructor(raw) {
    this.id = raw.id
    this.first_name = raw.first_name
    this.last_name = raw.last_name
    this.email = raw.email
    this.gender = raw.gender
  }

  static findAll() { //must to have
    var promise = new Promise((resolve, reject)=>{
      db.all('select * from Student', (err, rows)=>{
        if(err){
          reject(err);
        }
        else{
          if(rows !== undefined) {
            let results = rows.map(m => new Student(m))
            resolve(results);
          }
          else{
            resolve(rows);
          }
        }
      })
    })
    return promise
  }

  static findById(id) {
    db.get('select * from Student where id="'+id+'"', (err, rows)=>{
      if(err){
        reject(err);
      }
      else{
        if(rows !== undefined) {
          let results = new Student(rows);
          resolve(results);
        }
        else{
          resolve(rows);
        }
      }
    })
    return promise
  } //must to have

  static findWhere(id, column) {
    db.all(`select * from Student where ${column}='${id}'`, (err, rows)=>{
      if(err){
        reject(err);
      }
      else{
        if(rows !== undefined) {
          let results = models.map(m => new Student(m))
          resolve(results);
        }
        else{
          resolve(rows);
        }
      }
    })
    return promise
  } //nice to have

  static create(data) {
    var promise = new Promise((resolve, reject)=>{
      db.run(`insert into Student values(null, '${data.first_name}', '${data.last_name}', '${data.email}', '${data.gender}')`, (err)=>{
        if(err) {
          reject(err);
        }
        else{
          resolve(this.id);
        }
      })
    })
    return promise;
  } //must to have

  static update(data) {
    var promise = new Promise((resolve, reject)=>{
      db.run(`update Student set first_name ='${data.first_name}', last_name='${data.last_name}', email='${data.email}', gender='${data.gender}' where id='${data.id}'`, (err)=>{
        if(err){
          reject(err);
        }
        else{
          resolve();
        }
      })
    })
    return promise;
  } //must to have

  static destroy(id) {
    var promise = new Promise((resolve, reject)=>{
      db.run(`delete from Student where id='${id}'`, (err)=>{
        if(err){
          reject(err);
        }
        else{
          resolve(err);
        }
      })
    })
    return promise;
  } //must to have

}

module.exports = Student;
