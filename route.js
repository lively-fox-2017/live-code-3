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

app.get('/deleteSubject/:id', (req, res) =>{
	Subject.destroy(req.params.id).then(res.redirect('/'))
})

app.post('/newStudent', (req, res) =>{
	Student.create(req.body.first_name, req.body.last_name, req.body.email, req.body.gender).then(res.redirect('/student'))
})

app.get('/editStudent/:id', (req, res) =>{
	Student.findById(req.params.id).then((result) =>{
		res.render('pages/editStudent', {temp : result})
	})
})

app.post('/editStudentFinal', (req, res) =>{
	Student.update(req.body.student_id, req.body.first_name, req.body.last_name, req.body.email, req.body.gender).then(res.redirect('/student'))
})

app.get('deleteStudent/:id', (req, res) =>{
	Student.destroy(req.params.id).then(res.redirect('/student'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})