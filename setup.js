var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database/database.db');

function tableSubject(){
  db.run('CREATE TABLE Subject (id INTEGER PRIMARY KEY AUTOINCREMENT, subject_name TEXT, subject_code TEXT)', (err) => {
    if(!err){
      console.log('table subject created');
    }
  })
}

function tableStudents(){
  db.run('CREATE TABLE Students (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, email TEXT, gender TEXT)', (err) => {
    if(!err){
      console.log('table student created');
    }
  })
}

function tableConjunction(){
  db.run('CREATE TABLE StudentsSubject (id INTEGER PRIMARY KEY AUTOINCREMENT, subject_id INTEGER REFERENCES Subject(id), student_id INTEGER REFERENCES Students(id))', (err) => {
    if(!err){
      console.log('table conjunction created');
    }
  })
}

// tableSubject()
tableConjunction()
