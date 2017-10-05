"use strict"

const express = require('express');
const router = express.Router();
const SubjectsController = require('./../controllers/subjects');

router.get('/', (req, res) => {
	SubjectsController.listSubjects(req, res);
});

router.get('/add', (req, res) => {
	SubjectsController.createSubject(req, res);
});

router.post('/add', (req, res) => {
	SubjectsController.addSubject(req, res);
});

router.get('/update/:id', (req, res) => {
	SubjectsController.editSubject(req, res);
});

router.post('/update/:id', (req, res) => {
	SubjectsController.updateSubject(req, res);
});

router.get('/delete/:id', (req, res) => {
	SubjectsController.deleteSubject(req, res);
});

module.exports = router;