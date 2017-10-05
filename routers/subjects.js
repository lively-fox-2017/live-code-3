const express = require('express')
const router = express.Router()
const Subject = require('../models/subjects')

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/data.db');


// })

router.get('/', function(req,res){
  //res.send('hello')
  Subject.findAll()
  .then((rowSubject)=>{
    //console.log('inininini',rowSubject);
    res.render('subjects',{rowSubject})
  })
})


router.get('/', function(req, res){
  res.send('hello')
  Subject.findById(req.params.id)
  .then((rowSubject)=>{
    res.render('editSubject',{rowSubject:rowSubject})
  })
})

router.post('/',function(req, res){
  Subject.create(req.body)
  .then((rowSubject)=>{
    res.redirect('subjects',{rowSubject:rowSubject})
  })
})

// router.post('/editSubject/:id', function(req, res){
//   Subject.update(req.body, req.params)
//   .then((rowSubject)=>{
//     res.redirect('subjects', {rowSubject:rowSubject})
//   })
// })





















 module.exports = router;
