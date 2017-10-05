const express = require('express')
const app = express()

var ejs = require('ejs')
app.set('view engine', 'ejs')

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

//-------Teacher
const teacher = require('./routers/teacher.js')
app.use('/teachers', teacher)

//-----Subject
const subject = require('./routers/subject.js')
app.use('/subject', subject)


app.listen(3000)