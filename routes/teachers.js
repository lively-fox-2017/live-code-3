const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/data.db')
const Teacher = require('../models/modelTeacher')
const Subject = require('../models/modelSubject')


router.get('/', function (req, res) {
    Promise.all([
        Teacher.findAll(),
        Subject.findAll()
    ]).then((result) => {
        result[0].forEach((teacher) => {
            result[1].forEach((subject) => {
                if (teacher.id_subject == subject.id) {
                    teacher.subject = subject.subject
                }

            })

        })
        res.render('teacher', { dataRow: result[0] })
    })
})

router.post('/', function (req, res) {
    Teacher.newData(req.body).then((hasil) => {
        res.redirect('teachers')
    })

})

router.get('/update/:id', function (req, res) {

})

router.post('/update/:id', function (req, res) {

})

router.get('/delete/:id', function (req, res) {
    Teacher.deleteData(req.params.id).then((result) => {
        res.redirect('../../teachers')
    })
})


module.exports = router;