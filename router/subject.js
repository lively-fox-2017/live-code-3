var express = require('express')
var router = express.Router()
var modelSubject = require('../models/subject.js')
var modelStudent = require('../models/student.js')


// // a middleware function with no mount path. This code is executed for every request to the router
// router.use(function (req, res) {
//   console.log('Time:', Date.now())
// })


// router.get('/', function (req, res) {
//     modelSubject.findAll()
//     .then(data => {
//         res.render('subject', {data:data})
//     })
// })

router.get('/', function (req, res) {
    modelStudent.findAll()
    .then(output => {
        modelSubject.findAll()
        .then(data => {
            data.forEach((d,idx)=> {
                var temp = []
                modelSubject.getStudents(d.id)
                .then(result => {
                    result.forEach(x => {
                        modelStudent.findById(x.id)
                        .then(students => {
                            // console.log(students)
                            students.forEach(m => {
                                temp.push(m.first_name)
                            })
                            // console.log(d.students, 'Halo')
                            data[idx].students = temp
                            // console.log(data[idx])
                            if(idx >= data.length - 2) {
                                // res.send(data)
                                res.render('subject', {data : data})
                            }
                            console.log(data)
                        })
                        // console.log(temp)
                    })
                })     
                
            })
         })
   
    })
    // res.send('Hello World')
})


router.get('/add', (req,res) => {
    res.render('addSubject')
    // res.send('masuk')
})

router.post('/add', function (req, res) {
    modelSubject.create(req.body)
    .then(() => {
        res.redirect('/subject')
    })
})

router.get('/update/:id', (req,res) => {
    modelSubject.findById(req.params.id)
    .then(data => {
        // res.send(data)
        res.render('editSubject', {data: data})
    })
    // res.send(req.params.id)
})

router.post('/update/:id', function (req, res) {
    modelSubject.update(req.params.id,req.body)
    .then(() => {
        res.redirect('/subject')
    })
})

router.get('/delete/:id', function (req, res) {
    modelSubject.destroy(req.params.id)
    .then(() => {
        res.redirect('/subject')
    })
})

router.get('/assign/:id', (req,res) => {
    modelSubject.findById(req.params.id)
    .then(data => {
        modelStudent.findAll()
        .then(students => {   
            res.render('assignStudent', {data:data, students:students})      
        })
    })
})

router.post('/assign/:id', function (req, res) {
    modelSubject.assign(req.params.id,req.body.studentId)
    .then(() => {
        res.redirect('/subject')
    })
})
module.exports = router