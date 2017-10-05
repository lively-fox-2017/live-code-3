const express = require('express');
const router = express.Router();
const Student = require('../models/student')

router.get('/', (req,res) => {
	Student.findAll().then(rows => {
		res.render('student', {data:rows})
	}).catch(err => {
		res.send(err)
	})
})
router.post('/', (req,res) => {
	Student.add(req.body).then(rows => {
		res.redirect('/students')
	}).catch(err => {
		res.send(err)
	})
})
router.get('/edit/:id', (req,res) => {
	Student.findById(req.params.id).then(row => {
		res.render('student_edit', {data:row})
	}).catch(err => {
		res.send(err)
	})
})
router.post('/edit/:id', (req,res) => {
	Student.edit(req.params.id, req.body).then(row => {
		res.redirect('/students')
	}).catch(err => {
		res.send(err)
	})
})
router.get('/delete/:id', (req,res) => {
	Student.del(req.params.id).then(row => {
		res.redirect('/students')
	}).catch(err => {
		res.send(err)
	})
})
module.exports = router