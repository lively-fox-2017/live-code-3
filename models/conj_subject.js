const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

class ConjSubject{
	constructor(){

	}
	static findAll(){
		const promise = new Promise((resolve,reject) => {
			let query = `SELECT * FROM ConjSubject`
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
			let query = `SELECT * FROM ConjSubject WHERE id = '${id}'`
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
	static findWhere(params) {
		const promise = new Promise((resolve, reject) => {
			let query = `SELECT * FROM ConjSubject WHERE ${params.column} = '${params.find}'`
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
module.exports = ConjSubject