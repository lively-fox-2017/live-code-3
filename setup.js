var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');

db.serialize(function(err, rows) {
  db.run("CREATE TABLE IF NOT EXISTS teachers (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, email TEXT, gender TEXT)");
  if(err){
    console.log('Error create database teachers')
  }
  console.log('Success create database teachers');

  db.run("CREATE TABLE IF NOT EXISTS subjects (id INTEGER PRIMARY KEY AUTOINCREMENT, subject_name TEXT, subject_code TEXT)");
  if(err){
    console.log('Error create database teachers')
  }
  console.log('Success create database teachers');
});
