const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');
const ConjSubject = require('./conj_subject')
const Student = require('./student')
class Subject{
	constructor(){

	}
	static findAll(){
		const promise = new Promise((resolve,reject) => {
			let query = `SELECT * FROM Subjects`
			db.all(query, (err, rows) => {
				if(!err) {
					resolve(rows)
		    		let arrProm = []
		    		ConjSubject.findAll().then(conjunctions => {
						conjunctions.forEach((conjunction,i) => {
							arrProm.push(Student.findById(conjunction.id_student))
						})
						Promise.all(arrProm).then(students => {
							students.forEach((student,i) => {
								conjunctions[i]['name'] = student.first_name
							})
							let arr_subject = []
			    			let subjects = rows.map(subject => {
								subject["student"] = []
				    			let new_conj = conjunctions.map(conj => {
				    				if(subject.id == conj.id_subject){
				    					return subject.member.push(conj.first_name)
				    				}
			    				})
			    				arr_subject.push(subject)
			    			})
			    			resolve(arr_subject)
						})
		    		})
		    		resolve(rows)
				} else {
					reject(err)
				}
			})
		})
		return promise
	}
	static findById(id) {
		const promise = new Promise((resolve, reject) => {
			let query = `SELECT * FROM Subjects WHERE id = '${id}'`
			db.each(query, (err, row) => {
				if(!err) {
					resolve(row)
				} else {
					reject(err)
				}
			})
		})
		return promise
	}
	static add(data) {
		const promise = new Promise((resolve,reject) => {
			let query = `INSERT INTO Subjects (subject_name,subject_code) VALUES ('${data.subject_name}','${data.subject_code}')`
			db.run(query, (err,msg) => {
				if(!err) {
					resolve('Success add!')
				} else {
					reject(err)
				}
			})
		})
		return promise
	}
	static add_student(data) {
		const promise = new Promise((resolve,reject) => {
			let query = `INSERT INTO ConjSubject (id_student,id_subject) VALUES ('${data.id_student}','${data.id_subject}')`
			db.run(query, (err,msg) => {
				if(!err) {
					resolve('Success add!')
				} else {
					reject(err)
				}
			})
		})
		return promise
	}
	static edit(id,data) {
		const promise = new Promise((resolve,reject) => {
			let query = `UPDATE Subjects SET subject_name='${data.subject_name}',subject_code='${data.subject_code}' WHERE id = '${id}'`
			db.run(query, (err,msg) => {
				if(!err) {
					resolve('Success edit!')
				} else {
					reject(err)
				}
			})
		})
		return promise
	}
	static del(id) {
		const promise = new Promise((resolve,reject) => {
			let query = `DELETE FROM Subjects WHERE id = '${id}'`
			db.run(query, (err,msg) => {
				if(!err) {
					resolve('Success deleted!')
				} else {
					reject(err)
				}
			})
		})
		return promise
	}
}
module.exports = Subject