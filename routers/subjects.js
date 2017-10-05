let express = require('express')
let router = express.Router()
let Subjects = require('../models/subjectsMod.js')

router.get('/', function(req,res) {
  Subjects.findAll().then(function(rows){
    res.render('./subjects.ejs',{dataJsonSubjects:rows});
  }).catch(function(err){
    console.log(err);
  })
});

module.exports = router
