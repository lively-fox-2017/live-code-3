const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/data.db');

db.serialize(() => {

  db.run(`CREATE TABLE IF NOT EXISTS subjects (
	  id INTEGER PRIMARY KEY AUTOINCREMENT,
	  subject_name	TEXT NOT NULL,
    subject_code	TEXT NOT NULL)`,() => {
    console.log(`Create Table Subjects Berhasil`);
  })

  db.run(`CREATE TABLE IF NOT EXISTS teachers (
	  id INTEGER PRIMARY KEY AUTOINCREMENT,
	  first_name	TEXT NOT NULL,
	  last_name	TEXT NOT NULL,
	  email	INTEGER NOT NULL,
    gender TEXT,
    subjectsid INTEGER,
    FOREIGN KEY(subjectsid) REFERENCES subjects(id));`, () => {
    console.log(`Create Table Teachers Berhasil`);
  })

})
