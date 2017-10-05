const express = require('express')
const router = express.Router()
const Subject = require('../models/subjects')
const Teacher = require('../models/teachers')

// router.get('/', function(req,res) {
//   Subject.findAll()
//   .then(dataSubject => {
//     res.render('subjects/subjects', {dataSubject: dataSubject})
//   })
//   .catch(err => {
//     res.send(err)
//   })
// })

router.get('/', function(req,res) {
  Subject.findAll()
  .then(dataSubject => {
  Teacher.findAll()
  .then(dataTeacher => {
    for (let i = 0; i < dataSubject.length; i++) {
        for (let j = 0; j < dataTeacher.length; j++) {
          if (dataSubject[i].id_teacher == dataTeacher[j].id){
            dataSubject[i].name = dataTeacher[j].first_name + ' ' + dataTeacher[j].last_name
          }
        }
      }
      // res.send(dataSubject)
      res.render('subjects/subjects', {dataSubject: dataSubject, dataTeacher: dataTeacher})
    })
  })
})

router.get('/add', function(req,res) {
  Subject.findAll()
  .then(dataSubject => {
    res.render('subjects/add', {dataSubject: dataSubject, errCode: null})
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/add', function(req,res) {
  Subject.createSubject(req)
  .then(dataSubject => {
    res.redirect('/subjects')
  })
  .catch(err => {
    // res.send(err)
    if (err) {
      if (err.code == 'SQLITE_CONSTRAINT') {
        Subject.findAll()
        .then(dataSubject => {
          res.render('subjects/add', {dataSubject: dataSubject, errCode: 'SUBJECT CODE SUDAH ADA YANG PAKAI'})
        })
      }
    }
  })
})

router.get('/delete/:id', function(req,res) {
  Subject.deleteSubject(req)
  .then(dataSubject => {
    res.redirect('/subjects')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/edit/:id', function(req,res) {
  Subject.findById(req)
  .then(dataSubject => {
    res.render('subjects/edit', {dataSubject: dataSubject[0], errCode: null})
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/edit/:id', function(req,res) {
  Subject.updateSubject(req)
  .then(dataSubject => {
    res.redirect('/subjects')
  })
  .catch(err => {
    if (err) {
      if (err.code == 'SQLITE_CONSTRAINT') {
        Subject.findAll()
        .then(dataSubject => {
          res.render('subjects/add', {dataSubject: dataSubject[0], errCode: 'SUBJECT CODE SUDAH ADA YANG PAKAI'})
        })
      }
    }
  })
})

module.exports = router
