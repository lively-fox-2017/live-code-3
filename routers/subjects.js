let express = require('express')
let router = express.Router()
let Subjects = require('../models/subjectsMod.js')

router.get('/', function(req,res){
  Subjects.findAll().then(function(rows){
    res.render('./subjects.ejs',{dataJsonSubjects:rows});
  }).catch(function(err){
    console.log(err);
  })
});

router.post('/',function(req,res){
  Subjects.create(req).then(function(){
    res.redirect('/subjects')
  }).catch(function(err){
    console.log(err);
  })
})

router.get('/edit/:id',function(req,res){
  Subjects.findById(req).then(function(rows){
    res.render('editSubjects.ejs',{dataJsonSubjects:rows});
  }).catch(function(err){
    console.log(err);
  })
})

router.post('/edit/:id',function(req,res){
  Subjects.update(req).then(function(){
    res.redirect('/subjects')
  }).catch(function(err){
    console.log(err);
  })
})

router.get('/delete/:id',function(req,res){
  Subjects.destroy(req).then(function(){
    res.redirect('/subjects')
  }).catch(function(err){
    console.log(err);
  })
})

module.exports = router
