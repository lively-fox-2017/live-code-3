const express = require('express');
const router = express.Router()
const Contact = require('../models/student.js')

router.get('/list', function(req, res){
  Contact.findAll().then((dataRows)=>{
    res.render('student', {dataRows:dataRows});
  })
})

router.get('/add', function(req, res){
  res.render('student_add');
})

router.post('/add', function(req, res){
  Contact.add(req.body).then((lastId)=>{

  })
})

module.exports = router;
