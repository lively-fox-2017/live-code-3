const express = require('express')
const router = express.Router()
const Subject = require('../models/subject')


router.get('/', (req, res)=>{
	res.render('indexOfSubject')
})

router.get('/list', (req, res)=>{
	Subject.selectAll().then((object_of_subject)=>{
		// res.send(object_of_subject)
		res.render('listOfSubjects', {dataSubject:object_of_subject})
	})
})

router.get('/add', (req, res)=>{
	res.render('addSubject')
})

router.post('/add', (req, res)=>{
	Subject.addSubject(req.body)
	// res.send(req.body)
	res.redirect('../../subject')
})

router.get('/edit/:id', (req, res)=>{
	Subject.getById(req.params.id).then((object_of_subject)=>{
		// res.send(object_of_subject)
		res.render('EditOfSubject', {dataSubject:object_of_subject})
	})
})

router.post('/edit/:id', (req, res)=>{
	// res.send(req.body)
	Subject.updateSubject(req.body, req.params.id)
	// res.send(req.body)
	res.redirect('../list')
})

router.get('/delete/:id', (req, res) =>{
	Subject.deleteSubject(req.params.id)
	res.redirect('../list')
})


module.exports = router
