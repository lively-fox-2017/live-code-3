const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});


db.run(`CREATE TABLE IF NOT EXISTS Subject (id INTEGER PRIMARY KEY AUTOINCREMENT, subject_name TEXT, subject_code TEXT)`, function(err) {
  if(err) {
    console.log(err);
  }
  else {
    console.log('berhasil');
  }
})


db.run(`CREATE TABLE IF NOT EXISTS Teacher (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, email TEXT, gender TEXT, id_subject INTEGER REFERENCES Subject (id))`, function(err) {
  if(err) {
    console.log(err);
  }
  else {
    console.log('berhasil');
  }
})
