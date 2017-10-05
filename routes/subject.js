'use strict';
const express = require('express');
const Subject = require('../models/subject');
const Student = require('../models/student');

let router = express.Router();

router.get('/', (req, res)=>{
  Subject.findAll().then((subjects)=>{
    console.log(subjects);
    res.render('subject.ejs', {subjects});
  })
})

router.post('/', (req, res)=>{
  Subject.create(req.body.subject_name, req.body.subject_code).then(()=>{
    res.redirect('/subject');
  })
})

router.get('/delete/:id', (req, res)=>{
  Subject.destroy(req.params.id).then(()=>{
    res.redirect('/subject');
  })
})

router.get('/edit/:id', (req, res)=>{
  Subject.findById(req.params.id).then((subject)=>{
    res.render('subject-edit', {subject});
  })
})

router.post('/edit/:id', (req, res)=>{
  Subject.update(req.params.id, req.body.subject_name, req.body.subject_code).then(()=>{
    res.redirect('/subject');
  })
})

router.get('/add-student', (req,res)=>{
  Student.findAll().then((students)>{
    console.log(students);
    res.render('add-student')
  })
})

module.exports = router;
