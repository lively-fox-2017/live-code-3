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
}

