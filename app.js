const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const subject = require('./routers/subject.js')
const student = require('./routers/student.js')
const home = require('./routers/home.js')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', home);
app.use('/subject', subject)
app.use('/student', student)


app.set('view engine', 'ejs');

app.listen(3000);
