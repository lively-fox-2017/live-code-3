var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/database.db');

db.serialize(() => {
  db.run(`CREATE TABLE Subjects (id INTEGER PRIMARY KEY AUTOINCREMENT,
    subject_name VARCHAR(100), subject_code VARCHAR(100) )`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Create Table Subjects Berhasil');
      }
    });

  db.run(`CREATE TABLE Teachers (id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(100), last_name VARCHAR(100), email VARCHAR(50), gender VARCHAR(50) )`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Create Table Teachers Berhasil');
      }
    });
})
