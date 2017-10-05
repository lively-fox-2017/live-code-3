// express
const express = require('express');
const router = express.Router();

const Teacher = require('../models/teacher')
router.get('/teacher', function(req, res){
  Teacher.findAll().then((teachers) => {
    res.render('teacher/teacher', {teacher: teachers});
  })
});

router.post('/teacher', function(req, res){
  Teacher.create(req.body.first_name, req.body.last_name, req.body.email, req.body.gender);
  // console.log(req.body)
	res.redirect('/teacher');
});

router.get('/teacher/edit/:id', function(req, res){
  Teacher.findById(req.params.id).then((rows) => {
    console.log(req.params)
  	res.render('teacher/edit', {teacher: rows});
  });
});

router.get('/teacher/delete/:id', function(req, res){
  Teacher.destroy(req.params.id);
  console.log(req.params)
	res.redirect('/teacher');
});

module.exports = router;
