const express = require('express')
const router = express.Router()
const Subject = require('../models/subject')

router.get('/', (req,res)=>{
  Subject.findAll()
  .then(subjects=>{
    res.render('subjects',{dataSubjects:subjects})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/add', (req,res)=>{
  Subject.findAll()
  .then(subjects=>{
    res.render('add_subjects',{dataSubjects:subjects})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/add', (req,res)=>{
  Subject.add(req)
  .then(subjects=>{
    res.redirect('/subjects')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/delete/:id', (req,res)=>{
  Subject.delete(req)
  .then(subjects=>{
    res.redirect('/subjects')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/edit/:id',(req,res)=>{
  Subject.findById(req)
  .then(subjects=>{
    res.render('edit_subjects', {dataSubjects:subjects[0]})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/edit/:id',(req,res)=>{
  Subject.Update(req)
  .then(subjects=>{
    res.redirect('/subjects')
  })
  .catch(err=>{
    res.send(err)
  })
})

module.exports = router
