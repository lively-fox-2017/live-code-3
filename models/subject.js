const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./data.db');

class Subject {
  constructor(raw) {
    this.id = raw.id
    this.subject_name = raw.subject_name
    this.subject_code = raw.subject_code
  }

  static findAll() { //must to have
    var promise = new Promise((resolve, reject)=>{
      db.all('select * from Subject', (err, rows)=>{
        if(err){
          reject(err);
        }
        else{
          if(rows !== undefined) {
            let results = models.map(m => new Subject(m))
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
    db.get('select * from Subject where id="'+id+'"', (err, rows)=>{
      if(err){
        reject(err);
      }
      else{
        if(rows !== undefined) {
          let results = new Subject(rows);
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
    db.all(`select * from Subject where ${column}='${id}'`, (err, rows)=>{
      if(err){
        reject(err);
      }
      else{
        if(rows !== undefined) {
          let results = models.map(m => new Subject(m))
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
      db.run(`insert into Subject values(null, '${data.subject_name}', '${data.subject_code}')`, (err)=>{
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
      db.run(`update Subject set subject_name ='${data.subject_name}', subject_code='${data.subject_code}' where id='${data.id}'`, (err)=>{
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
      db.run(`delete from Subject where id='${id}'`, (err)=>{
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

module.exports = Subject;
