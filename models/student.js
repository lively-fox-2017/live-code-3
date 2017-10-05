const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

class Student{
	constructor(){

	}
	static findAll(){
		const promise = new Promise((resolve,reject) => {
			let query = `SELECT * FROM Students`
			db.all(query, (err, rows) => {
					console.log(rows)
				if(!err) {
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
			let query = `SELECT * FROM Students WHERE id = '${id}'`
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
}
module.exports = Student