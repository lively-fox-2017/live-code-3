const express = require('express')
const app = express()
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
// parse application/json
app.use(bodyParser.json())

app.use('../student',student)
app.use('../teacher',teacher)

const student=require('./routes/student')
const teacher=require('./routes/teacher')


// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
