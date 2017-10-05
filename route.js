var express = require('express')
var app = express()
app.set('view engine', 'ejs');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
const Subject = require('./models/subjects')
const Student = require('./models/students')

app.get('/', function (req, res) {
  Subject.findAll().then((result) =>{
  	res.render('pages/Subject', {temp : result})
  })
})

app.get('/student', (req, res) =>{
	Student.findAll().then((result) =>{
		console.log(result)
		res.render('pages/Student', {temp : result})
	})
})

app.post('/newSubject', (req, res) =>{
	Subject.create(req.body.subject_name, req.body.subject_code).then(res.redirect('/'))
})

app.get('/editSubject/:id', (req, res) =>{
	Subject.findById(req.params.id).then((result) =>{
		res.render('pages/editSubject', {temp : result})
	})
})

app.post('/editSubjectFinal', (req, res) =>{
	Subject.update(req.body.subject_id, req.body.subject_name, req.body.subject_code).then(res.redirect('/'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})