const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

class Student{
	constructor(){

	}
	static findAll(){
		const promise = new Promise((resolve,reject) => {
			let query = `SELECT * FROM Students`
			db.all(query, (err, rows) => {
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
	static add(data) {
		const promise = new Promise((resolve,reject) => {
			let query = `INSERT INTO Students (first_name,last_name,email,gender) VALUES ('${data.first_name}','${data.last_name}','${data.email}','${data.gender}')`
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
			let query = `UPDATE Students SET first_name='${data.first_name}',last_name='${data.last_name}',email='${data.email}',gender='${data.gender}' WHERE id = '${id}'`
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
			let query = `DELETE FROM Students WHERE id = '${id}'`
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
module.exports = Student