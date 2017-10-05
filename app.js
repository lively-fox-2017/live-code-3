const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
let index = require('./routs/index')
let student = require('./routs/student')
app.use('/', index)
app.use('/students', student)

app.listen(3000);