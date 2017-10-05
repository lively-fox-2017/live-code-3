var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data.db');


class Subject{
	constructor(data){
		this.id = data.id
		this.subject_name = data.subject_name
		this.subject_code = data.subject_code
	}

	static selectAll(){
		return new Promise((resolve)=>{
			db.all('SELECT * FROM Subjects', (err, rows)=>{
				let subject = rows.map((element)=>{
					return new Subject(element)
				})
				resolve(subject)
			})
		})
	}

	static addSubject(reqBody){
		let subject = new Subject(reqBody)
		let insert = `INSERT INTO Subjects (subject_name, subject_code) VALUES ('${subject.subject_name}', '${subject.subject_code}')`

		return new Promise(()=>{
			db.run(insert, (err)=>{

			})
		})
	}

	static getById(id){
		return new Promise((resolve)=>{
			
			let getById = `SELECT * FROM Subjects WHERE id = ${id}`
			// console.log(getById)
			db.all(getById, (err, rows)=>{
				let subject = rows.map((element)=>{
					return new Subject(element)
				})
				resolve(subject)
			})
				
		})
	}

	static updateSubject(reqBody, id){
		let subject = new Subject(reqBody)
		return new Promise(()=>{
			let update = `UPDATE Subjects SET subject_name = '${subject.subject_name}', subject_code = '${subject.subject_code}' WHERE id = ${id}`
				console.log(update)
			db.run(update, (err)=>{

			})
		})
	}

	static deleteSubject(id){
		return new Promise(()=>{
			let deleteSub = `DELETE FROM Subjects WHERE id = ${id}` 
			db.run(deleteSub, (err)=>{

			})
		})
	}
}

module.exports = Subject
