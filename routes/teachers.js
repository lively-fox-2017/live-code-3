const express = require('express')
const router = express.Router()
const Teacher = require('../models/teachers')

router.get('/', function(req,res) {
  Teacher.findAll()
  .then(dataTeacher => {
    res.render('teachers/teachers', {dataTeacher: dataTeacher})
  })
  .catch(err => {
    res.send(err)
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
