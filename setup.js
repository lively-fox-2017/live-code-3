const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS Students (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name VARCHAR, last_name VARCHAR, email VARCHAR, gender VARCHAR)");
    db.run("CREATE TABLE IF NOT EXISTS Subjects (id INTEGER PRIMARY KEY AUTOINCREMENT, subject_name VARCHAR, subject_code VARCHAR)");
    db.run("CREATE TABLE IF NOT EXISTS ConjSubject (id INTEGER PRIMARY KEY AUTOINCREMENT, id_student INTEGER, id_subject INTEGER)");
    // db.run("INSERT INTO Students (id,first_name,last_name,email,gender) VALUES ('','Noor','Kholis','cholis_elbazar@gmail.com','male')");
    // db.run("INSERT INTO Subjects (id,subject_name,subject_code) VALUES ('','KIMIA','001')", "counter", 0);
});
