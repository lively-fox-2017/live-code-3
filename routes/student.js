const express = require('express');
const Student = require('../models/student');

let router = express.Router();


router.get('/', (req, res)=>{
  Student.findAll().then((students)=>{
    res.render('student.ejs', {students});
  })
})

module.exports = router;
