var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data.db');


class Teacher{
	constructor(data){
		this.id = data.id
		this.first_name = data.first_name
		this.last_name = data.last_name
		this.email = data.email
		this.gender = data.gender
	}

	static selectAll(){
		return new Promise((resolve)=>{
			db.all('SELECT * FROM Teachers', (err, rows)=>{
				let subject = rows.map((element)=>{
					return new Teacher(element)
				})
				resolve(subject)
			})
		})
	}

	static addTeacher(reqBody){
		let subject = new Subject(reqBody)
		let insert = `INSERT INTO Teachers (first_name, last_name, email, gender, id_subject) VALUES ('${subject.subject_name}', '${subject.subject_code}')`

		return new Promise(()=>{
			db.run(insert, (err)=>{

			})
		})
	}
}

module.exports = Teacher