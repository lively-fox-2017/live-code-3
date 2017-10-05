const express = require('express');
var router = express.Router()
const Student = require('../models/student.js');

router.get('/', (req, res)=>{
    Student.findAll((rows)=>{
        // res.send(rows)
        // console.log(rows);
            res.render('student', {student: rows})
    })
})

module.exports = router;