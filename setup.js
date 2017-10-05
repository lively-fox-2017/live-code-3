const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS Subject (id INTEGER PRIMARY KEY AUTOINCREMENT,subject_name VARCHAR(100), subject_code VARCHAR(10))", err=>{
    if (!err) {
      console.log('tabel Subject sukses dibuat');
    } else {
      console.log(err);
    }
  });
  db.run("CREATE TABLE IF NOT EXISTS Teacher (id INTEGER PRIMARY KEY AUTOINCREMENT,first_name VARCHAR(100), last_name VARCHAR(100), email VARCHAR(100), gender VARCHAR(6), SubjectId INTEGER, FOREIGN KEY (SubjectId) REFERENCES Subject(id))", err=>{
    if (!err) {
      console.log('tabel Teacher sukses dibuat');
    } else {
      console.log(err);
    }
  });
  db.run("CREATE TABLE IF NOT EXISTS Student (id INTEGER PRIMARY KEY AUTOINCREMENT,first_name VARCHAR(100), last_name VARCHAR(100), email VARCHAR(100), gender VARCHAR(6))", err=>{
    if (!err) {
      console.log('tabel Student sukses dibuat');
    } else {
      console.log(err);
    }
  });
});
