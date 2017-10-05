const express = require('express');
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

const student = require('./routes/student.js');
const index = require('./routes/index.js');

app.use('/student', student)
app.use('/', index)

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})