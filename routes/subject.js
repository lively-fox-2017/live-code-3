var express = require('express');
var route = express();

const subject = require('../models/subject')

route.get('/', function (req, res) {
  subject.findAll().then((rows)=>{
    cres.render('subject', {subject:rows})
  })
})

route.get('/edit/:id', function (req, res) {
  subject.findById(req.params.id).then((rows)=>{
    console.log(rows);
    res.render('subject-edit', {subject:rows})
  })
})

module.exports = route;
