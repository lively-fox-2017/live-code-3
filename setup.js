var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');

db.serialize(function() {
  db.run("CREATE TABLE Teachers (id INTEGER PRIMARY KEY AUTOINCREMENT,first_name VARCHAR(255),last_name VARCHAR(255),email VARCHAR(255),gender VARCHAR(255))",()=>{
    console.log('Table Teachers berhasil dibuat!');
  })
  db.run("CREATE TABLE Students (id INTEGER PRIMARY KEY AUTOINCREMENT,subject_name VARCHAR(255),subject_code VARCHAR(255))",()=>{
    console.log('Table Students berhasil dibuat!');
  })
})
