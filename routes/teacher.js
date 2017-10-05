const express=require ('express')
const router=express.Router()
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');
const teacher=require('../models/teacher')

router.get('/',(req,res)=>{
  teacher.findAll()
  .then(dataTeacher=>{
    // console.log('masuk');
    res.render('teacher',{dataTeacher:dataTeacher})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/addteacher',(req,res)=>{
  teacher.findAll()
  .then(dataTeacher=>{
    res.render('addteacher',{dataTeacher:dataTeacher})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/addteacher',(req,res)=>{
  teacher.postInsert(req)
  // console.log('sampe ')
    .then(dataTeacher=>{
      res.redirect('/teacher')
      // console.log();
    })
    .catch (err=>{
      res.send(err)
    })
})
//
// router.post('/',req,res)=>{
//   teacher
// }
module.exports = router;
