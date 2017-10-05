const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/data.db')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const subject = require('./routes/subjects')
const teacher = require('./routes/teachers')
const index = require('./routes/index')

app.use('/subjects', subject)
app.use('/teachers', teacher)
app.use('/', index)


app.listen(3000);
