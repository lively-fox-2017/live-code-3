const express = require('express')
const router = express.Router()
const modelsTeacher = require('../models/teacher');
const modelsSubject = require('../models/subject');

router.get('/', function (req, res) {
  // res.send('Hello World')
  modelsTeacher.findAll()
  .then((data)=>{
    modelsSubject.findAll()
    .then((dataSubject)=>{
      let gender=[{'gender':'male'},{'gender':'female'}]
      // res.render('teacher_list',{data:data,dataSubject:dataSubject})
      res.render('teacher_list',{data:data,gender:gender})
    })
  })
  .catch((err)=>{
    res.send(err);
  })

})

router.post('/', function (req, res) {
  modelsTeacher.create(req.body)
  .then((data)=>{
    res.redirect('/teacher')
  })
  .catch((err)=>{
    res.send(err);
  })

})

router.get('/edit/:id', function (req, res) {
  // res.send('Hello World')
  modelsTeacher.findById(req.params.id)
  .then((data)=>{
    let gender=[{'gender':'male'},{'gender':'female'}]
    res.render('teacher_edit',{data:data,gender:gender})
  })
  .catch((err)=>{
    res.send(err);
  })
})

router.post('/edit/:id', function (req, res) {
  modelsTeacher.update(req.body,req.params.id)
  .then((result)=>{
    res.redirect('/teacher')
  })
  .catch((err)=>{
    res.send(err);
  })

})

router.get('/delete/:id', function (req, res) {
  modelsTeacher.destroy(req.params.id)
  .then((result)=>{
    res.redirect('/teacher')
  })
  .catch((err)=>{
    res.send(err);
  })

})

module.exports=router;
