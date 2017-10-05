let sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('data.db')

db.serialize(function(){
  db.run(`CREATE TABLE IF NOT EXISTS subjects (id INTEGER AUTO INCREMENT PRIMARY KEY, subject_code TEXT, subject_name TEXT)`);
  db.run(`CREATE TABLE IF NOT EXISTS teachers (id INTEGER AUTO INCREMENT PRIMARY KEY, first_name TEXT, last_name TEXT, email TEXT, gender TEXT)`)
})
