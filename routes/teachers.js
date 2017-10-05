const express = require('express')
const router = express.Router()
const Teacher = require('../models/teacher')
const Subject = require('../models/subject')

router.get('/', (req,res)=>{
  Teacher.findAll()
  .then(teachers=>{
    Subject.findAll()
    .then(subjects=>{
      // res.send(teachers)
      for (var i = 0; i < teachers.length; i++) {
        for (var j = 0; j < subjects.length; j++) {
          if(teachers[i].idSubject == subjects[j].id){
            teachers[i].name = subjects[j].subject_name
          }
        }
      }
      res.render('teachers',{dataTeachers:teachers})
    })
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/add', (req,res)=>{
  Teacher.findAll()
  .then(teachers=>{
    res.render('add_teachers',{dataTeachers:teachers})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/add', (req,res)=>{
  Teacher.add(req)
  .then(teachers=>{
    res.redirect('/teachers')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/delete/:id', (req,res)=>{
  Teacher.delete(req)
  .then(teachers=>{
    res.redirect('/teachers')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/edit/:id',(req,res)=>{
  Teacher.findById(req)
  .then(teachers=>{
    res.render('edit_teachers', {dataTeachers:teachers[0]})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/edit/:id',(req,res)=>{
  Teacher.Update(req)
  .then(teachers=>{
    res.redirect('/teachers')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/add_list/:id',(req,res)=>{
  Teacher.findAll()
  .then(teacher=>{
    res.render('add_list', {dataTeachers:teacher})
  })
  .catch(err=>{
    res.send(err)
  })
})
module.exports = router
