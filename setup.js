//
// 1. Subject memiliki informasi `subject_name` dan `subject_code`.
// Subject adalah mata pelajaran yang ada di sekolah tersebut.
//
// 2. Teacher memiliki informasi `first_name`, `last_name`, `email` dan `gender`
// (gunakan dropdown dengan pilihan: female/male. Harus re-populate ketika melakukan edit).
// Teacher adalah orang yang mengajarkan suatu Subject di sekolah tersebut

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
