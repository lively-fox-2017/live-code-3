const express = require('express');
var router = express.Router()
const bodyParser = require('body-parser');
const Student = require('../models/student.js');

router.get('/', (req, res)=>{
    Student.findAll((rows)=>{
            res.render('student', {student: rows})
    })
})

router.post('/', (req, res)=>{
    // console.log(req.body);
    Student.create(req.body, (err)=>{
        // res.send('hello')
        if (!err){
            res.redirect('student')
        }
    })
})

router.get('/edit/:id', (req, res)=>{
    // console.log(req.params);
    // console.log(req.body);
    Student.findById(req.params, (err, students)=>{
        if(!err){
            // res.send(students)
            res.render('studentedit', {data: students})
        } else {
            res.send(err)
            // console.log(err);
        }
    })
})

router.post('/edit/:id', (req, res)=>{
    Student.update(req.body, req.params.id, (err)=>{
        if(!err){
            res.redirect('student')
        }
    })
})

router.get('/delete/:id', (req, res)=>{
    console.log(req.params.id);
    Student.destroy(req.params, (err)=>{
        if(!err){
            res.redirect('/student')
        } else {
            console.log(err);
            // res.send(err)
        }
    })
})

module.exports = router;