var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');

db.serialize(() => {
  let createStudents = `CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    gender TEXT
  )`;
  let createSubjects = `CREATE TABLE IF NOT EXISTS subjects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    subject_name TEXT,
    subject_code TEXT
  )`;
  let createStudentsSubjects = `CREATE TABLE IF NOT EXISTS students_subjects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_student INTEGER REFERENCES students(id) ON DELETE CASCADE,
    id_subject INTEGER REFERENCES subjects(id) ON DELETE CASCADE
  )`;
  db.run(createStudents, function(err) {
    if (!err) {
      console.log(createStudents);
    } else {
      console.log(err);
    }
  });
  db.run(createSubjects, function(err) {
    if (!err) {
      console.log(createSubjects);
    } else {
      console.log(err);
    }
  });
  db.run(createStudentsSubjects, function(err) {
    if (!err) {
      console.log(createStudentsSubjects);
    } else {
      console.log(err);
    }
  });
})
console.log('Successfully Created');
