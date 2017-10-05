const express = require('express')
const router = express.Router()
const Subject = require('../models/subject')

router.get('/', (req, res)=>{
	Subject.selectAll().then((object_of_subject)=>{
		// res.send(object_of_teacher)
		res.render('subjects', {dataSubject:object_of_subject})
	})
})







module.exports = router
