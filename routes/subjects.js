const express = require('express')
const router = express.Router()
const Subject = require('../models/subjects')
const Teacher = require('../models/teachers')

router.get('/', function(req, res){
	Subject.findAll()
	.then(function(subjects){
		Teacher.findAll()
		.then(function(teacher){
			res.render('subjects', {
				dataSub: subjects,
				dataTea: teacher,
				title: 'Subject Page'
			})
		})
	})
})

router.post('/', function(req, res){
	Subject.save(req.body)
	.then(function(){
		res.redirect('/subjects')
	})
})

router.get('/edit/:id', function(req, res){
	Subject.findById(req.params.id)
	.then(function(subject){
		Teacher.findAll()
		.then(function(teachers){
			res.render('subjectsEdit', {
				dataSub: subject[0],
				dataTea: teachers,
				title: 'Edit Subject Page'
			})
		})
	})
})

router.post('/edit/:id', function(req, res){
	Subject.update(req.body, req.params.id)
	.then(function(){
		res.redirect('/subjects')
	})
})

router.get('/delete/:id', function(req, res){
	Subject.delete(req.params.id)
	.then(function(){
		res.redirect('/subjects')
	})
})

// Teacher yang ada di Subject

router.get('/teacher/:id', function(req, res){
	Subject.findById(req.params.id)
	.then(function(subjectID){
		Subject.findAll()
		.then(function(subjects){
			Teacher.findAll()
			.then(function(teachers){
				res.render('subjectTeachers', {
					dataSubId: subjectID,
					dataSub: subjects,
					dataTea: teachers,
					title: 'Subject Teacher Page'
				})
			})
		})
	})
})

router.post('/teacher/:id', function(req, res){
	Subject.saveSubject(req.body)
	.then(function(){
		res.redirect('/subjects')
	})
})

module.exports = router