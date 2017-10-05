var express = require('express')
var router = express.Router()

let Subjects = require('../models/Subjects')

router.get('/', (req, res)=> {
  Subjects.findAll().then((dataSubjects)=>{
      console.log(dataSubjects)
      res.render('subjects',{dataSubjects:dataSubjects})
    })
})

router.post('/add',(req, res)=>{
  Subjects.create(req.body).then(()=>{
    res.redirect('../subjects');
  })
})

router.get('/update/:id',(req, res)=>{
  // console.log(req.params.id)
  Subjects.findById(req.params.id).then((dataSubject)=>{
    // console.log(dataSubject)
    res.render('editSubjects', {dataSubject:dataSubject});
  })
})

router.post('/update/:id', (req , res)=>{
  Subjects.update(req.params.id, req.body).then(()=>{
    res.redirect('../../subjects')
  })
})


module.exports = router;