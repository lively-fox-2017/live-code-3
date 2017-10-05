var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data.db');

function tableTeacher(){
	let createTeacher = 'CREATE TABLE Teachers (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, email TEXT, gender TEXT)' 
	db.run(createTeacher, (err)=>{
		console.log('oke teacher')
	})
}

function tableSubject(){
	let createSubject = 'CREATE TABLE Subjects (id INTEGER PRIMARY KEY AUTOINCREMENT, subject_name TEXT, subject_code TEXT, id_teacher TEXT, FOREIGN KEY(id_teacher) REFERENCES Teachers(id))' 
	db.run(createSubject, (err)=>{
		console.log('oke subject')
	})
}

function dataDummy(){
	db.run(`insert into Teachers(first_name, last_name, email, gender) 
		Values ('wisnu', 'wakwaw', 'teacher@gmail.com', 'male')`, (err)=>{

		})
	db.run(`insert into Teachers(first_name, last_name, email, gender) 
		Values ('redha', 'wakwaw', 'teacher2@gmail.com', 'male')`, (err)=>{
			
		})
}

// tableTeacher()
// tableSubject()
dataDummy()