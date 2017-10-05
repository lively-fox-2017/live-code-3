const express = require('express')
const router = express.Router()
const Teacher = require('../models/teacher')

router.get('/', (req, res)=>{
	Teacher.selectAll().then((object_of_teacher)=>{
		// res.send(object_of_teacher)
		res.render('teachers', {dataTeacher:object_of_teacher})
	})
})







module.exports = router
