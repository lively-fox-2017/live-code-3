var express = require('express')
var app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var ejs = require('ejs')
app.set('view engine','ejs')


const index = require('./routes/index')
const students = require('./routes/students')
const subjects = require('./routes/subjects')

app.get('/', function (req, res) {
  res.redirect('/index')
})

app.use('/index',index)
app.use('/students',students)
// app.use('/contacts',contacts)


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
