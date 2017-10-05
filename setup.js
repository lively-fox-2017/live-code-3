"use strict"

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('db/data.db')

db.serialize(function () {
  db.run(`CREATE TABLE IF NOT EXISTS teachers
    (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name VARCHAR,
      last_name VARCHAR,
      email,
      gender)`, function (err, row) {
            if(!err) {
              console.log('Tabel teachers Berhasil ')
            }
  })

  db.run(`CREATE TABLE IF NOT EXISTS subjects
    (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subject_name VARCHAR,
      subject_code VARCHAR,
      teachersId INTEGER,
      FOREIGN KEY(teachersId) REFERENCES teachers(id)
    )`, function (err, row) {
            if(!err) {
              console.log('Tabel subjects Berhasil ')
            }
  })
})

db.close()
