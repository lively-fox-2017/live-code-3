'use strict';
const express = require('express');
const body_parser = require('body-parser');
const student = require('./routes/student');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use('/student', student);


app.listen(3000);
