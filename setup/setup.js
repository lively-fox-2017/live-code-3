var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/data.db');

db.serialize(() => {
	db.run(`CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, email TEXT, gender TEXT)`, err => {
		if (err) throw err;
	});

	db.run(`CREATE TABLE IF NOT EXISTS subjects (id INTEGER PRIMARY KEY AUTOINCREMENT, subject_name TEXT, subject_code TEXT)`, err => {
		if (err) throw err;
	});

	db.run(`CREATE TABLE IF NOT EXISTS students_subjects (id INTEGER PRIMARY KEY AUTOINCREMENT, student_id INTEGER REFERENCES students(id), subject_id INTEGER REFERENCES subjects(id))`, err => {
		if (err) throw err;
	});

	db.run(`CREATE UNIQUE INDEX unique_student_code ON subjects (subject_code);`, err => {
		if (err) throw err;
	});
});