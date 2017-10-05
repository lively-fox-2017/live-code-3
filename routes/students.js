var express = require('express');
var route = express();
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const students = require('../models/students')

route.get('/', function (req, res) {
  students.findAll().then((rows)=>{
    res.render('students', {students:rows})
  })
})

route.post('/', urlencodedParser, function (req, res) {
  students.create(req.body.first_name, req.body.last_name, req.body.email, req.body.gender)
  res.redirect('/students')
})

route.get('/edit/:id', function (req, res) {
  students.findById(req.params.id).then((rows)=>{
    res.render('students-edit', {students:rows, id:req.params.id})
  })
})

route.post('/edit/:id', urlencodedParser, function (req, res) {
  students.update(req.body.first_name, req.body.last_name, req.body.email, req.body.gender, req.params.id)
  res.redirect('/students')
})

route.get('/delete/:id', function (req, res) {
  students.destroy(req.params.id)
  res.redirect('/students')
})


module.exports = route;
