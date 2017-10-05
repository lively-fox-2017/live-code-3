var express = require('express')
var router = express.Router()
var modelStudent = require('../models/student.js')

// // a middleware function with no mount path. This code is executed for every request to the router
// router.use(function (req, res) {
//   console.log('Time:', Date.now())
// })


router.get('/', function (req, res) {
    modelStudent.findAll()
    .then(data => {
        // modelSubject.findAll()
        // .then(data => {
        //     data.forEach((d,idx)=> {
        //         var temp = []
        //         modelSubject.getStudents(d.id)
        //         .then(result => {
        //             result.forEach(x => {
        //                 modelStudent.findById(x.id)
        //                 .then(students => {
        //                     // console.log(students)
        //                     students.forEach(m => {
        //                         temp.push(m.first_name)
        //                     })
        //                     // console.log(d.students, 'Halo')
        //                     data[idx].students = temp
        //                     // console.log(data[idx])
        //                     if(idx >= data.length - 2) {
        //                         // res.send(data)
        //                         res.render('subject', {data : data})
        //                     }
        //                     console.log(data)
        //                 })
        //                 // console.log(temp)
        //             })
        //         })     
                
        //     })
        //  })
        res.render('student', {data: data})
    })
})


router.get('/add', (req,res) => {
    res.render('addStudent')
    // res.send('masuk')
})

router.post('/add', function (req, res) {
    modelStudent.create(req.body)
    .then(() => {
        res.redirect('/student')
    })
})

router.get('/update/:id', (req,res) => {
    modelStudent.findById(req.params.id)
    .then(data => {
        // res.send(data)
        res.render('editStudent', {data: data})
    })
    // res.send(req.params.id)
})

router.post('/update/:id', function (req, res) {
    modelStudent.update(req.params.id,req.body)
    .then(() => {
        res.redirect('/student')
    })
})

router.get('/delete/:id', function (req, res) {
    modelStudent.destroy(req.params.id)
    .then(() => {
        res.redirect('/student')
    })
})
module.exports = router