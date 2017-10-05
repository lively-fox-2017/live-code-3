'use strict';
const express = require('express');
const Student = require('../models/student');

let router = express.Router();


router.get('/', (req, res)=>{
  Student.findAll().then((students)=>{
    res.render('student.ejs', {students});
  })
})

router.post('/', (req, res)=>{
  console.log(req.body);
  Student.create(req.body.first_name, req.body.last_name, req.body.email, req.body.gender).then(()=>{
    res.redirect('/student');
  })
})

router.get('/edit/:id', (req, res)=>{
  Student.findById(req.params.id).then((student)=>{
    res.render('student-edit', {student});
  })
})

router.post('/edit/:id', (req, res)=>{
  Student.update(req.params.id ,req.body.first_name, req.body.last_name, req.body.email, req.body.gender).then(()=>{
    res.redirect('/student');
  })
})

router.get('/delete/:id', (req, res)=>{
  console.log('ululu');
  Student.destroy(req.params.id).then(()=>{
    res.redirect('/student');
  })
})

module.exports = router;
