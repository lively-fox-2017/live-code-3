const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('school.db');

db.serialize(() => {

  // Subjects
  db.run(`CREATE TABLE IF NOT EXISTS subjects (id INTEGER PRIMARY KEY AUTOINCREMENT, subject_name TEXT, subject_code TEXT)`, (err) => {
    if (err) console.log(err);
  });

  // Students
  db.run(`CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, email TEXT UNIQUE, gender TEXT)`, (err) => {
    if (err) console.log(err);
  });

  // Students_Subjects
  db.run(`CREATE TABLE IF NOT EXISTS students_subjects (id INTEGER PRIMARY KEY AUTOINCREMENT, student_id INTEGER, subject_id INTEGER, score INTEGER, FOREIGN KEY(student_id) REFERENCES students(id), FOREIGN KEY (subject_id) REFERENCES subjects(id))`);

  // Unique index on subject_code
  db.run(`CREATE UNIQUE INDEX subject_code_unique ON subjects(subject_code)`, (err) => {
    if (err) console.log(err);
  });

  console.log('Successfully generated tables');

});
