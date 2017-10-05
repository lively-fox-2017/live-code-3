const express = require('express');
const router = express.Router()
const Student = require('../models/student.js')

router.get('/list', function(req, res){
  Student.findAll().then((dataRows)=>{
    var message = ""
     if(req.query.message){
       if(req.query.message.toLowerCase().indexOf('unique') > -1){
         message+='Subject Code already used';
       }
       else{
         message+=req.query.message
       }
     }
    res.render('student', {dataRows:dataRows, message:message});
  })
})

router.get('/add', function(req, res){
  res.render('student_add');
})

router.post('/add', function(req, res){
  Student.create(req.body).then((lastId)=>{
    res.redirect('/student/list?message=success');
  }).catch((err)=>{
    res.redirect('/student/list?message='+err);
  })
})

router.get('/update/:id', function(req, res){
  Student.findById(req.param('id')).then((rows)=>{
    res.render('student_update', {dataRows:rows});
  }).catch((err)=>{
    console.log(err);
  })
})

router.post('/update/:id', function(req, res){
  req.body.id = req.param('id');
  Student.update(req.body).then(()=>{
    res.redirect('/student/list?message=success');
  }).catch((err)=>{
    res.redirect('/student/list?message='+err);
  })
})

router.get('/delete/:id', function(req, res){
  Student.destroy(req.param('id')).then(()=>{
    res.redirect('../list?message=success');
  }).catch((err)=>{
    res.redirect('../list?message='+err);
  })
})

router.get('/subject/:id', function(req, res){
  Student.generateAssign(req.param('id')).then((dataRows)=>{
    res.render('student_subject', {dataRows:dataRows});
  }).catch((err)=>{
    console.log(err);
  })
})

module.exports = router;
