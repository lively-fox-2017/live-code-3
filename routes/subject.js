var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');
const express =require('express')
const router=express.Router()
const subject=require('../models/subject')

router.get('/',(req,res)=>{
  subject.findAll()
  .then(dataSubject=>{
    // console.log('masuk');
    res.render('subject',{dataSubject:dataSubject})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/addsubject',(req,res)=>{
  subject.findAll()
  .then(dataSubject=>{
    res.render('addsubject',{dataSubject:dataSubject})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/addsubject',(req,res)=>{
  subject.postInsert(req)
  // console.log('sampe ')
    .then(dataSubject=>{
      res.redirect('/subject')
      // console.log();
    })
    .catch (err=>{
      res.send(err)
    })
})


module.exports = router;
