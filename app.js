const express = require('express')
const app = express()

var ejs = require('ejs')
app.set('view engine', 'ejs')

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



//-------Teacher
const teacher = require('./routers/teacher.js')
app.use('/teachers', teacher)

//-----Subject
const subject = require('./routers/subject.js')
app.use('/subject', subject)

//-----INDEX
const index = require('./routers/index.js')
app.use('/', index)

app.listen(3000)