const express = require('express')
const router = express.Router()
const ModelSubjects = require('../models/subjects');

router.get('/', (req, res)=>{
  ModelSubjects.findAll()
  .then(rowsSubjects=>{
    res.send(rowsSubjects)
  })
  .catch(err=>{
    res.send(err)
  })
})

module.exports = router;
