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

router.get('/add',(req,res)=>{
  teacher.findAll(req)
  .then(dataTeacher=>{
    res.render('teacher',{dataTeacher:dataTeacher})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/add',(req,res)=>{
  teacher.create(req)
    .then(dataTeacher=>{
      res.redirect('/teacher')
    })
    .catch (err=>{
      res.send(err)
    })
})

router.get('/add',(req,res)=>{
  teacher.findById(req)
  .then(dataTeacher=>{
    res.render('teacher',{dataTeacher:dataTeacher})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/add',(req,res)=>{
  teacher.update(req)
    .then(dataTeacher=>{
      res.redirect('/teacher')
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
