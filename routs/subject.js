const express = require('express');
const router = express.Router();
const Subject = require('../models/subject')
const Student = require('../models/student')

router.get('/', (req,res) => {
	Subject.findAll().then(rows => {
		res.render('subject', {data:rows})
	}).catch(err => {
		res.send(err)
	})
})
router.post('/', (req,res) => {
	Subject.add(req.body).then(rows => {
		res.redirect('/subjects')
	}).catch(err => {
		res.send(err)
	})
})
router.get('/edit/:id', (req,res) => {
	Subject.findById(req.params.id).then(row => {
		res.render('subject_edit', {data:row})
	}).catch(err => {
		res.send(err)
	})
})
router.post('/edit/:id', (req,res) => {
	Subject.edit(req.params.id, req.body).then(row => {
		res.redirect('/subjects')
	}).catch(err => {
		res.send(err)
	})
})
router.get('/delete/:id', (req,res) => {
	Subject.del(req.params.id).then(row => {
		res.redirect('/subjects')
	}).catch(err => {
		res.send(err)
	})
})
router.get('/add_student/:id', (req,res) => {
	Promise.all([Subject.findById(req.params.id),Student.findAll()]).then(output =>{
		res.render('subject_student', {subject:output[0],student:output[1]})
	}).catch(err => {
		res.send(err)
	})
})
router.post('/add_student/:id', (req,res) => {
	Subject.add_student(req.params.id, req.body).then(row => {
		res.redirect('/subjects')
	}).catch(err => {
		res.send(err)
	})
})
module.exports = router