var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data.db');


app.get('/', function(req, res) {
  res.render('index')
})

app.get('/subject/list', (req, res) => {
  db.all(`SELECT * FROM Subject`, (err, rows) => {
    res.render('subject', {dataSubject: rows})
  })
})

app.get('/subject/add', (req, res) => {
  res.render('subjectAdd')
})

app.post('/subject/subject/add', (req, res) => {
  db.all(`INSERT INTO Subject(subject_name, subject_code) Values ("${req.body.subject_name}", "${req.body.subject_code}")`, (err) => {
    res.redirect('/subject/list')
  })
})

app.get('/subject/subject/delete/:id', (req, res) => {
  db.all(`DELETE FROM Subject Where id = "${req.params.id}"`, (err, rows) => {
    res.redirect('/subject/list')
  })
})

app.get('/subject/subject/edit/:id', (req, res) => {
  db.all(`SELECT * FROM Subject WHERE id = "${req.params.id}"`, (err, rows) => {
    res.render('subjectEdit', {dataSubject: rows})
  })
})

app.post('/subject/subject/edit/:id', (req, res) => {
  db.all(`UPDATE Subject SET subject_name = '${req.body.subject_name}', subject_code = '${req.body.subject_code}' WHERE id = '${req.params.id}'`, (err, rows) => {
    res.redirect('/subject/list')
  })
})

app.get('/teacher/list', (req, res) => {
  db.all(`SELECT * FROM Teacher`, (err, rows) => {
    res.render('teacher', {dataTeacher: rows})
  })
})



app.get('/add')

app.post('/add')

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
