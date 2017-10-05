"use strict"

const express = require('express');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const students = require('./routes/students');
const subjects = require('./routes/subjects');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', index);
app.use('/students', students);
app.use('/subjects', subjects);

app.get('*', (req, res) => {
	let err = new Error('Page Not Found');
	err.status = 404;
	res.render('error', {err});
});

app.listen(3000, () => console.log('server running on port 3000'));