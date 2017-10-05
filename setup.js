const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/data.db')

function createTableTeacher(){

	let query = `CREATE TABLE IF NOT EXISTS Teachers (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		first_name VARCHAR(50),
		last_name VARCHAR(50),
		email VARCHAR(50),
		gender VARCHAR(50)
	)`

	db.run(query, function(err){
		console.log(`Create table teacher berhasil!`)
	})

}

function createTableSubject(){

	let query = `CREATE TABLE IF NOT EXISTS Subjects (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		teacher_id INTEGER,
		subject_name VARCHAR(50),
		subject_code VARCHAR(50),
		FOREIGN KEY (teacher_id) REFERENCES Teachers (id)
	)`

	db.run(query, function(err){
		console.log(`Create table subject berhasil!`)
	})

}

// createTableTeacher()
// createTableSubject()
