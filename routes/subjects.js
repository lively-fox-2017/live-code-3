const express = require('express')
const router = express.Router()
const Subject = require('../models/subjects')

router.get('/', function(req, res){
	Subject.findAll()
	.then(function(subjects){
		res.render('')
	})
})

module.exports = router