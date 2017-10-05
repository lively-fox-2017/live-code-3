"use strict"

const express = require('express');
const router = express.Router();
const model = require('../models/teacher')



router.get('/list', (req, res) => {
  model.getAll((rows)=> {
    res.render('teacher', {data: rows})
  })
});


// router.post('/add', (req, res)=>{
//   model.create(req, ()=>{
//     res.render('/teacherAdd')
//   })
// });

router.get('/add', function (req, res) {
  res.render('teacherAdd')
})

router.post('/add', (req, res)=>{
  model.create(req, ()=>{
    res.render('teacher')
  })
});

router.get('/edit/:id', (req, res)=>{
  model.getEdit(req, (rows)=>{
    res.render('teacherEdit', {data: rows});
  })
});

router.post('/edit/:id', (req,res)=>{
  model.postEdit(req, (err, rows)=>{
    res.redirect('/teacher/list')
    // res.send(rows)
  });
});

router.get('/delete/:id', (req,res)=>{
  model.getDelete(req, (err, rows)=>{
    res.redirect('/teacher/list');
  });
});

module.exports = router
