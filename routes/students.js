"use strict"

const express = require('express');
const router = express.Router();
const StudentsController = require('./../controllers/students');

router.get('/', (req, res) => {
	StudentsController.listStudents(req, res);
});

router.get('/add', (req, res) => {
	StudentsController.createStudent(req, res);
});

router.post('/add', (req, res) => {
	StudentsController.addStudent(req, res);
});

router.get('/update/:id', (req, res) => {
	StudentsController.editStudent(req, res);
});

router.post('/update/:id', (req, res) => {
	StudentsController.updateStudent(req, res);
});

router.get('/delete/:id', (req, res) => {
	StudentsController.deleteStudent(req, res);
});


module.exports = router;