const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const index = require('./routes/index');
const students = require('./routes/students');
const subjects = require('./routes/subjects');

app.use(bodyParser.urlencoded( { extended: false } ));

app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use('/', index);
app.use('/students', students);
app.use('/subjects', subjects);

app.listen(3000);

console.log('Listening on port 3000');
