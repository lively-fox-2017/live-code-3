const express = require('express')
const router = express.Router()
const Teacher = require('../models/teachers')

router.get('/', function(req, res){
	Teacher.findAll()
	.then(function(teachers){
		res.render('teachers', {
			data: teachers,
			title: 'Teacher Page'
		})
	})
})

router.post('/', function(req, res){
	Teacher.save(req.body)
	.then(function(){
		res.redirect('/teachers')
	})
})

router.get('/edit/:id', function(req, res){
	Teacher.findById(req.params.id)
	.then(function(teachers){
		res.render('teachersEdit', {
			data: teachers[0],
			title: 'Edit Teacher Page'
		})
	})
})

router.post('/edit/:id', function(req, res){
	Teacher.update(req.body, req.params.id)
	.then(function(){
		res.redirect('/teachers')
	})
})

router.get('/delete/:id', function(req, res){
	Teacher.delete(req.params.id)
	.then(function(){
		res.redirect('/teachers')
	})
})

module.exports = router