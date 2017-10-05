var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sekolah.db');

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS subjects (id INTEGER PRIMARY KEY AUTOINCREMENT,subject_name TEXT, subject_code TEXT);");
  db.run("CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT ,first_name TEXT, last_name TEXT, email TEXT UNIQUE, gender TEXT);")
  db.run("CREATE TABLE IF NOT EXISTS student_subject_relations (id INTEGER REFERENCES subjects(id), student_id INTEGER REFERENCES students(id), subject_id INTEGER REFERENCES subjects(id), score INTEGER);");

});

db.close();
