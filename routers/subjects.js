var express = require('express')
var router = express.Router()

let Subjects = require('../models/Subjects')

router.get('/', (req, res)=> {
  Subjects.findAll().then((dataSubjects)=>{
    console.log(dataSubjects);
    // res.render('subjects')
  })
})

module.exports = router;