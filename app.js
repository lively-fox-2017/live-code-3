'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const student = require('./routes/student');
const subject = require('./routes/subject');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use('/student', student);
app.use('/subject', subject);


app.listen(3000);
