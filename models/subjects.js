"use strict"

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./../db/data.db');

class Subjects {
	constructor(id, subject_name, subject_code) {
		this._id = id;
		this._subject_name = subject_name;
		this._subject_code = subject_code;
	}

	get id() {
		return this._id;
	}

	get subject_name() {
		return this._subject_name;
	}

	get subject_code() {
		return this._subject_code;
	}

	static findAll() {
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM subjects`;
			db.all(query, (err, records) => {
				if (err) reject(err);
				const subjects = records.map(record => new Subjects(record.id, record.subject_name, record.subject_code));
				resolve(subjects);
			});
		});
	}

	static findById(id) {
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM subjects WHERE id = ${id}`;
			db.get(query, (err, record) => {
				if (err) reject(err);
				const subject = new new Subjects(record.id, record.subject_name, record.subject_code);
				resolve(subject);
			});
		});
	}

	static findWhere(column, value) {
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM subjects WHERE ${column} = '${value}'`;
			db.all(query, (err, records) => {
				if (err) reject(err);
				const subjects = records.map(record => new Subjects(record.id, record.subject_name, record.subject_code));
				resolve(subjects);
			});
		});
	}

	static create(values) {
		return new Promise((resolve, reject) => {
			values = values.map(value => '\'' + value + '\'').join(', ');
			const query = `INSERT INTO subjects (subject_name, subject_code) VALUES (${values})`;
			db.run(query, err => {
				if (err) reject(err);
			});
		})
	}

	static update(id, values) {
		return new Promise((resolve, reject) => {
			values = values.map(value => '\'' + value + '\'');
			const query = `UPDATE subjects SET subject_name = ${values[0]}, subject_code = ${values[1]} WHERE id = ${id}`;
			db.run(query, err => {
				if (err) reject(err);
			});
		});
	}

	static destroy(id) {
		return new Promise((resolve, reject) => {
			const query = `DELETE FROM subjects WHERE id = ${id}`;
			db.run(query, err => {
				if (err) reject(err);
			});
		});
	}
}

module.exports = Subjects;