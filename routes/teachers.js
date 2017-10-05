const express = require('express')
const router = express.Router()
const Teacher = require('../models/teachers')
const Subject = require('../models/subjects')

// router.get('/', function(req,res) {
//   Teacher.findAll()
//   .then(dataTeacher => {
//     res.render('teachers/teachers', {dataTeacher: dataTeacher})
//   })
//   .catch(err => {
//     res.send(err)
//   })
// })

router.get('/', function(req,res) {
  Teacher.findAll()
  .then(dataTeacher => {
    Subject.findAll()
    .then(dataSubject => {
      for (let i = 0; i < dataTeacher.length; i++) {
          for (let j = 0; j < dataSubject.length; j++) {
            if (dataTeacher[i].id_subject == dataSubject[j].id){
              dataTeacher[i].subjectname = dataSubject[j].subject_name
            }
          }
        }
        res.send(dataTeacher)
        // res.render('teachers/teachers', {dataTeacher: dataTeacher, dataSubject: dataSubject})
    })
  })
})

router.get('/add', function(req,res) {
  Teacher.findAll()
  .then(dataTeacher => {
    res.render('teachers/add', {dataTeacher: dataTeacher})
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/add', function(req,res) {
  Teacher.createTeacher(req)
  .then(dataTeacher => {
    res.redirect('/teachers')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/delete/:id', function(req,res) {
  Teacher.deleteTeacher(req)
  .then(dataTeacher => {
    res.redirect('/teachers')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/edit/:id', function(req,res) {
  Teacher.findById(req)
  .then(dataTeacher => {
    res.render('teachers/edit', {dataTeacher: dataTeacher[0]})
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/edit/:id', function(req,res) {
  Teacher.updateTeacher(req)
  .then(dataTeacher => {
    res.redirect('/teachers')
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router
