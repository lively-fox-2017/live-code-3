"use strict"

const express = require('express');
const router = express.Router();
const model = require('../models/subject')

router.get('/', function (req, res) {
  res.render('subject')
})

router.get('/list', function (req, res) {
  // res.send('list subject')
  model.getAll((rows)=>{
    res.render('subject', {data:rows})
  })
});

router.get('/add', function (req, res) {
  res.send('add subject')
});

router.post('/add', function (req, res) {
  res.send('add post subject')
})

router.get('/update:id', function (req, res) {
  res.send('update:id subject')
});

router.post('/update:id', function (req, res) {
  res.send('update:id post subject')
});

router.get('/delete:id', function (req, res) {
  res.send('delete:id subject')
})

module.exports = router
