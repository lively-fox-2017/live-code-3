const express = require('express')
const router = express.Router()
const ModelTeachers = require('../models/teachers');
const ModelSubjects = require('../models/subjects');

router.get('/', (req, res)=>{
  ModelTeachers.findAll()
  .then(rowsTeachers=>{
    ModelSubjects.findAll()
    .then(rowsSubjects=>{
      res.send(rowsTeachers, rowsSubjects)
    })
  })
  .catch(err=>{
    res.send(err)
  })
})


router.post('/', (req, res)=>{
  ModelTeachers.create()
  .then(()=>{
    res.send()
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/update/:id', (req, res)=>{
  ModelTeachers.findById(req.params.id, req.body)
  .then((rowsTeachers)=>{
    res.send(rowsTeachers)
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/update/:id', (req, res)=>{
  ModelTeachers.update()
  .then(()=>{
    res.send()
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/delete/:id', (req, res)=>{
  ModelTeachers.destroy(req.params.id)
  .then(()=>{
    res.send()
  })
  .catch((err)=>{
    res.send(err)
  })
})

module.exports = router;
