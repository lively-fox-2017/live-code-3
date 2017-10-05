const express = require('express')
const router = express.Router()
const Subject = require('../models/subjects')

router.get('/', function(req,res) {
  Subject.findAll()
  .then(dataSubject => {
    res.render('subjects/subjects', {dataSubject: dataSubject})
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/add', function(req,res) {
  Subject.findAll()
  .then(dataSubject => {
    res.render('subjects/add', {dataSubject: dataSubject})
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
    res.send(err)
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
    res.render('subjects/edit', {dataSubject: dataSubject[0]})
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
    res.send(err)
  })
})

module.exports = router
