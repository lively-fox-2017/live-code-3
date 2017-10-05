var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/data.db');

function makesTable() {

  db.run('CREATE TABLE IF NOT EXISTS Subjects(id INTEGER PRIMARY KEY AUTOINCREMENT, subject_name TEXT, subject_code TEXT)');
  db.run('CREATE TABLE IF NOT EXISTS Teachers(id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, email TEXT, gender TEXT, SubjectsId INTEGER REFERENCES Subjects("id"))');
  
}

// makesTable();