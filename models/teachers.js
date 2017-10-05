const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/data.db')

class Teacher {

	constructor(data){
		this.id = data['id']
		this.first_name = data['first_name']
		this.last_name = data['last_name']
		this.email = data['email']
		this.gender = data['gender']
	}

	static findAll(){

		let promise = new Promise(function(resolve, reject){

			let query = `SELECT * FROM Teachers`

			db.all(query, function(err, rows){
				let teachers = rows.map(function(row){
					return new Teacher(row)
				})

				if(!err){
					resolve(teachers)
				}else{
					reject(err)
				}

			})

		})

		return promise

	}

	static findById(id){

		let promise = new Promise(function(resolve, reject){

			let query = `SELECT * FROM Teachers WHERE id = ${id}`

			db.all(query, function(err, rows){
				let teachers = rows.map(function(row){
					return new Teacher(row)
				})

				if(!err){
					resolve(teachers)
				}else{
					reject(err)
				}

			})

		})

		return promise

	}

	static save(param){

		let promise = new Promise(function(resolve, reject){

			let query = `INSERT INTO Teachers (first_name, last_name, email, gender) VALUES (
				'${param.fn}',
				'${param.ln}',
				'${param.email}',
				'${param.gender}'
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

			let query = `UPDATE Teachers SET first_name = '${param.fn}', last_name = '${param.ln}', email = '${param.email}', gender = '${param.gender}' WHERE id = ${id}`

			db.run(query, function(err, rows){
				if(!err){
					resolve()
				}else{
					reject()
				}
			})

		})

		return promise

	}

	static delete(id){

		let promise = new Promise(function(resolve, reject){

			let query = `DELETE FROM Teachers WHERE id = ${id}`

			db.run(query, function(err, rows){
				if(!err){
					resolve()
				}else{
					reject()
				}
			})

		})

		return promise

	}

}

module.exports = Teacher
