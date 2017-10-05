"use strict"

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./../db/data.db');

class StudentsSubjects {
	constructor(id, student_id, subject_id) {
		this._id = id;
		this._student_id = student_id;
		this._subject_id = subject_id;
	}

	get id() {
		return this._id;
	}

	get student_id() {
		return this._student_id;
	}

	get subject_id() {
		return this._subject_id;
	}

	static findAll() {
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM students_subjects`;
			db.all(query, (err, records) => {
				if (err) reject(err);
				const students_subjects = records.map(record => new StudentsSubjects(record.id, record.student_id, record.subject_id));
				resolve(students_subjects);
			});
		});
	}

	static findById(id) {
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM students_subjects WHERE id = ${id}`;
			db.get(query, (err, record) => {
				if (err) reject(err);
				const students_subject = new StudentsSubjects(record.id, record.student_id, record.subject_id);
				resolve(students_subject);
			});
		});
	}

	static findWhere(column, value) {
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM students_subjects WHERE ${column} = '${value}'`;
			db.all(query, (err, records) => {
				if (err) reject(err);
				const students_subjects = records.map(record => new StudentsSubjects(record.id, record.student_id, record.subject_id));
				resolve(students_subjects);
			});
		});
	}

	static create(values) {
		return new Promise((resolve, reject) => {
			values = values.map(value => '\'' + value + '\'').join(', ');
			const query = `INSERT INTO students_subjects (student_id, subject_id) VALUES (${values})`;
			db.run(query, err => {
				if (err) reject(err);
			});
		})
	}

	static update(id, values) {
		return new Promise((resolve, reject) => {
			values = values.map(value => '\'' + value + '\'');
			const query = `UPDATE students_subjects SET student_id = ${values[0]}, subject_id = ${values[1]} WHERE id = ${id}`;
			db.run(query, err => {
				if (err) reject(err);
			});
		});
	}

	static destroy(id) {
		return new Promise((resolve, reject) => {
			const query = `DELETE FROM students_subjects WHERE id = ${id}`;
			db.run(query, err => {
				if (err) reject(err);
			});
		});
	}
}

module.exports = StudentsSubjects;