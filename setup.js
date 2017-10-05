const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./livecode");

db.serialize(function() {
  db.run("create table Subject(id integer primary key autoincrement, subject_name text, subject_code text)", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("berhasil buat tabel Subject");
      }
  })

  db.run("create table Student(id integer primary key autoincrement, first_name text, last_name text, email text, gender text)", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("berhasil buat tabel Student");
      }
  })

  db.run("create table SubjectStudent(id integer primary key autoincrement, idSubject integer references Subject(id) on delete cascade, idStudent integer references Student(id) on delete cascade, score integer)", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("berhasil buat tabel SubjectStudent");
      }
  })
})
