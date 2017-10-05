var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database/database.db');

class Subject {
  constructor(raw) {
    this.id = raw.id
    this.subject_name = raw.subject_name
    this.subject_code = raw.subject_code
  }

  static findAll() { //must to have
    let promiseObj = new Promise(function(resolve, reject) {
      db.all('SELECT * FROM Subject', (err, rows) => {
        let result = []
        rows.forEach((data) => {
          result.push(new Subject(data))
        })
        resolve(result)
      })
    });
    return promiseObj
  }

  static findById(paramsId) {
    let promiseObj = new Promise(function(resolve, reject) {
      db.get(`SELECT * FROM Subject WHERE id=${paramsId}`, (err, rows) => {
        let result = new Subject(rows)
        resolve(result)
      })
    });
    return promiseObj
  } //must to have

  static findWhere() {} //nice to have

  static create(subject_name, subject_code, cb) {
    db.run(`INSERT INTO Subject (subject_name, subject_code) VALUES ('${subject_name}', '${subject_code}')`, (err)=>{
      cb(err)
    })
  } //must to have

  static update(subject_name, subject_code, id) {
    db.run(`UPDATE Subject SET subject_name = '${subject_name}', subject_code= '${subject_code}' WHERE id = ${id}`)
  } //must to have

  static destroy(id) {
    db.run(`DELETE FROM Subject WHERE id='${id}'`)
  } //must to have

}

module.exports = Subject;
