var express = require('express')
var bodyParser = require('body-parser')

var app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

let index = require('./routers/index')
let teachers = require('./routers/teachers')
let subjects = require('./routers/subjects')

app.set('view engine', 'ejs'); 

app.use('/', index);
app.use('/teachers', teachers);
app.use('/subjects', subjects);

app.listen(3000, function () {
  console.log('Berjalan di port 3000!')
})