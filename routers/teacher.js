const express = require('express')
const router = express.Router()
const Teacher = require('../models/teacher')
const Subject = require('../models/subject')

router.get('/', (req, res)=>{
	res.render('indexOfTeacher')
})

router.get('/list', (req, res)=>{
	Promise.all([
		Teacher.selectAll(),
		Subject.selectAll()
		]).then(object=>{
			object[0].forEach((element)=>{
				object[1].forEach((element)=>{

				})
			})
			res.render('teachers', {dataTeacher:object[0], dataSubject:object[1]})
		})
	

})

router.get('/add', (req, res)=>{
	res.render('AddTeacher')
})

router.post('/add', (req, res)=>{
	Subject.addSubject(req.body)
	// res.send(req.body)
	res.redirect('../../subject')
})







module.exports = router
