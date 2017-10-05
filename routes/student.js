const express = require('express');
var router = express.Router()
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
    console.log(req.params);
    Student.findById(req.params, (err, students)=>{
        if(!err){
            res.send(students)
            // res.render('studentedit', {data: students})
        } else {
            // res.send(err)
            console.log(err);
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

module.exports = router;