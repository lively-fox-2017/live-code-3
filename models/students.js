"use strict"

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./../db/data.db');

class Students {
	constructor(id, first_name, last_name, email, gender) {
		this._id = id;
		this._first_name = first_name;
		this._last_name = last_name;
		this._email = email;
		this._gender = gender;
	}

	get id() {
		return this._id;
	}

	get first_name() {
		return this._first_name;
	}

	get last_name() {
		return this._last_name;
	}

	get email() {
		return this._email;
	}

	get gender() {
		return this._gender;
	}

	static findAll() {
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM students`;
			db.all(query, (err, records) => {
				if (err) reject(err);
				const students = records.map(record => new Students(record.id, record.first_name, record.last_name, record.email, record.gender));
				resolve(students);
			});
		});
	}

	static findById(id) {
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM students WHERE id = ${id}`;
			db.get(query, (err, record) => {
				if (err) reject(err);
				const student = new Students(record.id, record.first_name, record.last_name, record.email, record.gender);
				resolve(student);
			});
		});
	}

	static findWhere(column, value) {
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM students WHERE ${column} = '${value}'`;
			db.all(query, (err, records) => {
				if (err) reject(err);
				const students = records.map(record => new Students(record.id, record.first_name, record.last_name, record.email, record.gender));
				resolve(students);
			});
		});
	}

	static create(values) {
		return new Promise((resolve, reject) => {
			values = values.map(value => '\'' + value + '\'').join(', ');
			const query = `INSERT INTO students (first_name, last_name, email, gender) VALUES (${values})`;
			db.run(query, err => {
				if (err) reject(err);
			});
		})
	}

	static update(id, values) {
		return new Promise((resolve, reject) => {
			values = values.map(value => '\'' + value + '\'');
			const query = `UPDATE students SET first_name = ${values[0]}, last_name = ${values[1]}, email = ${values[2]}, gender = ${values[3]} WHERE id = ${id}`;
			db.run(query, err => {
				if (err) reject(err);
			});
		});
	}

	static destroy(id) {
		return new Promise((resolve, reject) => {
			const query = `DELETE FROM students WHERE id = ${id}`;
			db.run(query, err => {
				if (err) reject(err);
			});
		});
	}
}

module.exports = Students;