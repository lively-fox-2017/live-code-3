const express = require('express')
const router = express.Router()
const modelsSubject = require('../models/subject');

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

router.post('/add', function (req, res) {
  modelsSubject.create()
  .then((data)=>{
    res.render('subject_list',{data:data})
  })
  .catch((err)=>{
    res.send(err);
  })

})

module.exports=router;
