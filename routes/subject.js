const express = require('express')
const router = express.Router()
const modelsSubject = require('../models/subject');
const modelsTeacher = require('../models/teacher');

router.get('/', function (req, res) {
  // res.send('Hello World')
  modelsSubject.findAll()
  .then((data)=>{
    res.render('subject_list',{data:data})
  })
  .catch((err)=>{
    res.send(err);
  })

})

router.post('/', function (req, res) {
  modelsSubject.create(req.body)
  .then((data)=>{
    res.redirect('/subject')
  })
  .catch((err)=>{
    res.send(err);
  })

})

router.get('/edit/:id', function (req, res) {
  // res.send('Hello World')
  modelsSubject.findById(req.params.id)
  .then((data)=>{
    // res.send(data)
    res.render('subject_edit',{data:data})
  })
  .catch((err)=>{
    res.send(err);
  })
})

router.post('/edit/:id', function (req, res) {
  modelsSubject.update(req.body,req.params.id)
  .then((result)=>{
    res.redirect('/subject')
  })
  .catch((err)=>{
    res.send(err);
  })

})

router.get('/delete/:id', function (req, res) {
  modelsSubject.destroy(req.params.id)
  .then((result)=>{
    res.redirect('/subject')
  })
  .catch((err)=>{
    res.send(err);
  })

})

router.get('/:id/assign_teacher', function (req, res) {
  modelsTeacher.findAll()
  .then((data)=>{
    res.render('assign_teacher')
  })
  .catch((err)=>{
    res.send(err);
  })

})

router.post('/:id/assign_teacher', function (req, res) {
  modelsTeacher.update(req.body)
  .then((data)=>{
    res.redirect('/subject')
  })
  .catch((err)=>{
    res.send(err);
  })

})
module.exports=router;
