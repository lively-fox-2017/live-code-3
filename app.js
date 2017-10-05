var express = require('express');
var app = express();

app.set('view engine', 'ejs');
const index = require('./routes/index')
const subject = require('./routes/subject')
const students = require('./routes/students')

app.use('/', index)
app.use('/subject', subject)
app.use('/students', students)

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
