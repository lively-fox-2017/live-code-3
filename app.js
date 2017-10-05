const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')


const index = require('./routes/index');
app.use('/', index);

const subject = require('./routes/subject');
app.use('/subject', subject);

const teacher = require('./routes/teacher');
app.use('/teacher', teacher);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
