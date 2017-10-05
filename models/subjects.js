const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/data.db')

class Subject {

	constructor(data){
		this.teacher_id = data['teacher_id']
		this.subject_name = data['subject_name']
		this.subject_code = data['subject_code']
	}

	static findAll(){

		let promise = new Promise(function(resolve, reject){

			let query = `SELECT * FROM Subjects`

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

}

module.exports = Subject