const express = require('express')
const router = express.Router()
const ModelSubjects = require('../models/subjects');

router.get('/', (req, res)=>{
  ModelSubjects.findAll()
  .then(rowsSubjects=>{
    res.render('subjects', {dataSubjects: rowsSubjects})
  })
  .catch(err=>{
    res.send(err)
  })
})


router.post('/', (req, res)=>{
  ModelSubjects.create(req.body)
  .then(()=>{
    res.redirect('/subjects')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/update/:id', (req, res)=>{
  ModelSubjects.findById(req.params.id)
  .then((rowsSubjects)=>{
    res.render('subjectsEdit',{dataSubjects: rowsSubjects})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/update/:id', (req, res)=>{
  ModelSubjects.update(req.params.id, req.body)
  .then(()=>{
    res.redirect('/subjects')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/delete/:id', (req, res)=>{
  ModelSubjects.destroy(req.params.id)
  .then(()=>{
    res.send()
  })
  .catch((err)=>{
    res.send(err)
  })
})

module.exports = router;
