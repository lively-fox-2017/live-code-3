const express = require('express');
const router = express.Router();
const Subject = require('../models/subject.js');
const Student = require('../models/student.js');
const Subject_Student = require('../models/subject_student.js')

router.get('/list', function(req, res){
  // Subject.findAll().then((dataRows)=>{
  //   var message = ""
  //   if(req.query.message){
  //     if(req.query.message.toLowerCase().indexOf('unique') > -1){
  //       message+='Subject Code already used';
  //     }
  //     else{
  //       message+=req.query.message
  //     }
  //   }
  //   res.render('subject', {dataRows:dataRows, message:message});
  // })
  Subject.generateSubjectTable().then(()=>{
    
  }).catch((err)=>{
    console.log(err);
  })
})

router.get('/add', function(req, res){
  res.render('subject_add');
})

router.post('/add', function(req, res){
  Subject.create(req.body).then((lastId)=>{
    res.redirect('/subject/list?message=success');
  }).catch((err)=>{
    res.redirect('/subject/list?message='+err);
  })
})

router.get('/update/:id', function(req, res){
  Subject.findById(req.param('id')).then((rows)=>{
    res.render('subject_update', {dataRows:rows});
  }).catch((err)=>{
    console.log(err);
  })
})

router.post('/update/:id', function(req, res){
  req.body.id = req.param('id');
  Subject.update(req.body).then(()=>{
    res.redirect('/subject/list?message=success');
  }).catch((err)=>{
    res.redirect('/subject/list?message='+err);
  })
})

router.get('/delete/:id', function(req, res){
  Subject.destroy(req.param('id')).then(()=>{
    res.redirect('../list?message=success');
  }).catch((err)=>{
    res.redirect('../list?message='+err);
  })
})

router.get('/add_student/:id', function(req, res){
  Student.findAll().then((rows)=>{
    res.render('subject_add_student', {dataRows:rows, subject_id:req.param('id')});
  }).catch((err)=>{
    console.log(err);
  })
})

router.post('/add_student/:id', function(req, res){
  req.body.subject_id = req.param('id');
  Subject_Student.create(req.body).then(()=>{
    res.redirect('/subject/list?message=success');
  }).catch((err)=>{
    res.redirect('/subject/list?message='+err);
  })
})

module.exports = router;
