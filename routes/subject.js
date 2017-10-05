var express = require('express');
var route = express();
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const subject = require('../models/subject')

function errRenHandle(res, req, errMsg){
  subject.findAll().then((rows)=>{
    res.render('subject', {subject:rows, alert:errMsg})
  })
}

route.get('/', function (req, res) {
  errRenHandle(res, req, '')
})

route.post('/', urlencodedParser, function (req, res) {
  console.log(req.body);
  subject.create(req.body.subject_name, req.body.subject_code, (err)=>{
    if(err){
      errRenHandle(res, req, 'Subject Code already used')
    }
    res.redirect('/subject')
  })
});

route.get('/edit/:id', function (req, res) {
  subject.findById(req.params.id).then((rows)=>{
    res.render('subject-edit', {subject:rows, id:req.params.id})
  })
})

route.post('/edit/:id', urlencodedParser, function (req, res) {
  subject.update(req.body.subject_name, req.body.subject_code, req.params.id)
  res.redirect('/subject')
})

route.get('/delete/:id', function (req, res) {
  subject.destroy(req.params.id)
  res.redirect('/subject')
})

module.exports = route;
