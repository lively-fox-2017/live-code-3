//
// 1. Subject memiliki informasi `subject_name` dan `subject_code`.
// Subject adalah mata pelajaran yang ada di sekolah tersebut.
//
// 2. Teacher memiliki informasi `first_name`, `last_name`, `email` dan `gender`
// (gunakan dropdown dengan pilihan: female/male. Harus re-populate ketika melakukan edit).
// Teacher adalah orang yang mengajarkan suatu Subject di sekolah tersebut
// *Bonus Poin:*
// - Alter table Subject untuk mengubah column `subject_code` menjadi Unique (Implementasikan di file setup.js)(5)
// - Handle error dan tampilkan error 'Subject Code already used' pada view jika user meng-input data Subject dengan `subject_code` yang sudah ada (10)
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/database.db');

db.serialize(function() {
  db.run(`CREATE TABLE Subject (id INTEGER PRIMARY KEY AUTOINCREMENT, subject_name STRING, subject_code STRING)`, (err)=>{
    if(!err){
      console.log('Create Table Subject Success !');
    } else {
      console.log('Gagal');
    }
  })

  db.run(`CREATE TABLE Teacher (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name STRING, last_name STRING, email STRING, gender STRING)`, (err)=>{
    if(!err){
      console.log('Create Table Teacher Success !');
    } else {
      console.log('Gagal');
    }
  })
})

function alterUnique() {
  let query = `CREATE UNIQUE INDEX subject_code ON Subject(subject_code)`
  db.run(query, function(err) {
    if(!err){
      console.log('Alter Unique Berhasil');
    }else {
      console.log(err);
    }
  })
}
alterUnique()

function alterTabelTeachers() {
  let query = `ALTER TABLE Teacher ADD COLUMN idSubject INTEGER REFERENCES Subject(id)`
  db.run(query, function(err) {
    console.log('Alter Table Teachers Success!');
  })
}
alterTabelTeachers()
