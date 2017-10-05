const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./data.db');

function createTable() {
  db.serialize(function(){
    db.exec('create table if not exists Subject(id INTEGER PRIMARY KEY AUTOINCREMENT, subject_name TEXT, subject_code TEXT)', function(err){
      console.log(err);
    })
    db.exec('create table if not exists Student(id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, email TEXT, gender TEXT)', function(err){
      console.log(err);
    })
    db.exec('create table if not exists Subject_Student(id INTEGER PRIMARY KEY AUTOINCREMENT, subject_id INTEGER REFERENCES Subject(id), student_id INTEGER REFERENCES Student(id), score INTEGER)', function(err){
      console.log(err);
    })
  })
}

function addDummyData() {
  db.run('insert into Subject values(null, "Math Class 1", "M1")', function(err){
    console.log(err);
  })
  db.run('insert into Subject values(null, "Math Class 2", "M2")', function(err){
    console.log(err);
  })
  db.run('insert into Subject values(null, "Sport Class 1", "S1")', function(err){
    console.log(err);
  })
  db.run('insert into Student values(null, "Ian", "Winanto", "email@email.em", "male")', function(err){
    console.log(err);
  })
  db.run('insert into Student values(null, "Ian 2", "Winanto 2", "email2@email2.em", "male")', function(err){
    console.log(err);
  })
  db.run('insert into Student values(null, "Ian 3", "Winanto 3", "email3@email3.em", "male")', function(err){
    console.log(err);
  })
  db.run('insert into Student values(null, "Ts", "Tesss", "tes@tes.em", "female")', function(err){
    console.log(err);
  })
  db.run('insert into Subject_Student values(null, "1", "1", "100")', function(err){
    console.log(err);
  })
  db.run('insert into Subject_Student values(null, "3", "1", "10")', function(err){
    console.log(err);
  })
  db.run('insert into Subject_Student values(null, "2", "2", "100")', function(err){
    console.log(err);
  })
  db.run('insert into Subject_Student values(null, "4", "1", "100")', function(err){
    console.log(err);
  })
  db.run('insert into Subject_Student values(null, "4", "1", "100")', function(err){
    console.log(err);
  })
}

function alterSubjectCode() {
  db.run('', function(err){
    console.log(err);
  })
}

createTable();
alterSubjectCode();
// addDummyData();
