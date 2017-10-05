var express = require('express')
var router = express.Router()

let Teachers = require('../models/Teachers')

router.get('/', (req, res)=> {
  Teachers.findAll().then((dataTeachers)=>{
      console.log(dataTeachers)
      res.render('teachers',{dataTeachers:dataTeachers})
    })
})

router.post('/add',(req, res)=>{
  Teachers.create(req.body).then(()=>{
    res.redirect('../teachers');
  })
})

router.get('/update/:id',(req, res)=>{
  // console.log(req.params.id)
  Teachers.findById(req.params.id).then((dataTeacher)=>{
    // console.log(dataSubject)
    res.render('editTeacher', {dataTeacher:dataTeacher});
  })
})

router.post('/update/:id', (req , res)=>{
  Teachers.update(req.params.id, req.body).then(()=>{
    res.redirect('../../teachers')
  })
})
router.get('/delete/:id',(req, res)=>{
  // console.log(req.params.id)
  Teachers.destroy(req.params.id).then(()=>{
    // console.log(dataSubject)
    res.redirect('../../teachers');
  })
})

module.exports = router;