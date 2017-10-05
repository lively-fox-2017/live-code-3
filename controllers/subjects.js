"use strict"

const Subjects = require('./../models/subjects');

class SubjectsController {
	listSubjects(req, res) {
		Subjects.subjectWithStudents()
		.then(subjects => {

		})
		.catch(err => {
			if (err) throw err;
		});
	}

	createSubject(req, res) {
		res.render('subject-add');
	}

	addSubject(req, res) {
		const values = [req.body.subject_id, req.body.subject_code];
		Subjects.create(values)
		.then(() => {
			res.redirect('/subjects');
		})
		.catch(err => {
			if (err) throw err;
		});
	}

	editSubject(req, res) {
		Subjects.findById(req.params.id)
		.then(subject => {
			res.render('subject-edit', {subject});
		})
		.catch(err => {
			if (err) throw err;
		});
	}

	updateSubject(req, res) {
		const values = [req.body.subject_id, req.body.subject_code];
		Subjects.update(req.params.id, values)
		.then(() => {
			res.redirect('/subjects');
		})
		.catch(err => {
			if (err) throw err;
		});
	}

	deleteSubject(req, res) {
		Subjects.destroy(req.params.id)
		.then(() => {
			res.redirect('/subjects');
		})
		.catch(err => {
			if (err) throw err;
		});
	}
}

module.exports = SubjectsController;