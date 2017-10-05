const express = require('express')
var app = express()
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/data.db');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const subjects = require('./routes/subjects');
const teachers = require('./routes/teachers');


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/', index)
app.use('/subjects', subjects)
app.use('/teachers', teachers)



app.listen(3001, function () {
  console.log('ZUKEK!!!!')
})
