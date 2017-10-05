const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/data.db')
const Teacher = require('./teachers')

class Subject {

	constructor(data){
		this.id = data['id']
		this.teacher_id = data['teacher_id']
		this.subject_name = data['subject_name']
		this.subject_code = data['subject_code']
	}

	getTeacher(cb){

		Teacher.findById(this.teacher_id)
		.then(function(teacher){
			cb(teacher[0])
		})

	}

	static findAll(){

		let promise = new Promise(function(resolve, reject){

			let query = `SELECT * FROM Subjects`

			db.all(query, function(err, rows){
				let subjects = rows.map(function(row){
					return new Subject(row)
				})

				let count = 0
				subjects.forEach(function(subject){
					subject.getTeacher(function(teacher){
						subject.first_name = teacher.first_name
						subject.last_name = teacher.last_name

						count++
						if(!err){
							resolve(subjects)
						}else{
							reject(err)
						}

					})
				})

			})

		})

		return promise

	}

	static findById(id){

		let promise = new Promise(function(resolve, reject){

			let query = `SELECT * FROM Subjects WHERE id = ${id}`

			db.all(query, function(err, rows){
				let subjects = rows.map(function(row){
					return new Subject(row)
				})

				if(!err){
					resolve(subjects)
				}else{
					reject(err)
				}

			})

		})

		return promise

	}

	static save(param){

		let promise = new Promise(function(resolve, reject){

			let query = `INSERT INTO Subjects (teacher_id, subject_name, subject_code) VALUES (
				${param.teacherName},
				'${param.sn}',
				'${param.sc}'
			)`

			db.run(query, function(err, rows){
				if(!err){
					resolve()
				}else{
					reject(err)
				}
			})

		})

		return promise

	}

	static update(param, id){

		let promise = new Promise(function(resolve, reject){

			let query = `UPDATE Subjects SET teacher_id = ${param.teacherName}, subject_name = '${param.sn}', subject_code = '${param.sc}' WHERE id = ${id}`

		})

	}

	static saveSubject(param){

		let promise = new Promise(function(resolve, reject){

			let query = `INSERT INTO Subjects (teacher_id, subject_name, subject_code) VALUES (
				${param.teacherName},
				'${param.sn}',
				'${param.sc}'
			)`

			db.run(query, function(err, rows){
				if(!err){
					resolve()
				}else{
					reject(err)
				}
			})

		})

		return promise

	}

}

module.exports = Subject