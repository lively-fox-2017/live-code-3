var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/database.db');

db.serialize(function() {
    
    db.run("CREATE TABLE IF NOT EXISTS student (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name VARCHAR(250), last_name VARCHAR(250), email VARCHAR(250), gender VARCHAR(250))");
    
    
    db.run("CREATE TABLE IF NOT EXISTS subject (id INTEGER PRIMARY KEY AUTOINCREMENT, subject_name VARCHAR(250), subject_code VARCHAR(250))")

    db.run("CREATE TABLE IF NOT EXISTS studentSubject (id INTEGER PRIMARY KEY AUTOINCREMENT, subjectId INTEGER, studentId INTEGER)")
});