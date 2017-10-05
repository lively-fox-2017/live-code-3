var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database/database.db');

class Students {
  constructor(raw) {
    this.id = raw.id
    this.first_name = raw.first_name
    this.last_name = raw.last_name
    this.email = raw.email
    this.gender = raw.gender
  }

  static findAll() { //must to have
    let promiseObj = new Promise(function(resolve, reject) {
      db.all('SELECT * FROM Students', (err, rows) => {
        let result = []
        rows.forEach((data) => {
          result.push(new Students(data))
        })
        resolve(result)
      })
    });
    return promiseObj
  }

  static findById(paramsId) {
    let promiseObj = new Promise(function(resolve, reject) {
      db.get(`SELECT * FROM Students WHERE id=${paramsId}`, (err, rows) => {
        let result = new Students(rows)
        resolve(result)
      })
    });
    return promiseObj
  } //must to have

  static findWhere() {} //nice to have

  static create(first_name, last_name, email, gender) {
    db.run(`INSERT INTO Students (first_name, last_name, email, gender) VALUES ('${first_name}', '${last_name}', '${email}', '${gender}')`)
  } //must to have

  static update(subject_name, subject_code, id) {
    db.run(`UPDATE Students SET subject_name = '${subject_name}', subject_code= '${subject_code}' WHERE id = ${id}`)
  } //must to have

  static destroy(id) {
    db.run(`DELETE FROM Students WHERE id='${id}'`)
  } //must to have

}

module.exports = Students;
