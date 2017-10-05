"use strict"

const Students = require('./../models/students')

class StudentsController {
	listStudents(req, res) {

	}

	createStudent(req, res) {
		res.render('student-add');
	}

	addStudent(req, res) {
		const values = [req.body.first_name, req.body.last_name, req.body.email, req.body.gender];
		Students.create(values)
		.then(() => {
			res.redirect('/students');
		})
		.catch(err => {
			if (err) throw err;
		});
	}

	editStudent(req, res) {
		Students.findById(req.params.id)
		.then(student => {
			res.render('student-edit', {student});
		})
		.catch(err => {
			if (err) throw err;
		});
	}

	updateStudent(req, res) {
		const values = [req.body.first_name, req.body.last_name, req.body.email, req.body.gender];
		Students.update(req.params.id, values)
		.then(() => {
			res.redirect('/students');
		})
		.catch(err => {
			if (err) throw err;
		});
	}

	deleteStudent(req, res) {
		Students.destroy(req.params.id)
		.then(() => {
			res.redirect('/students');
		})
		.catch(err => {
			if (err) throw err;
		});
	}
}

module.exports = StudentsController;