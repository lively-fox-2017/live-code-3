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
module.exports = router