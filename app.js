var express = require('express')
var app = express()
var bodyParser = require('body-parser')


app.set('view engine', 'ejs');


var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const subject = require('./router/subject')
const student = require('./router/student')
 
app.use('/subject', subject)
app.use('/student', student)
app.get('/', function (req, res) {
    res.render('index')
//   res.send('Hello World')
})
 
app.listen(3000)