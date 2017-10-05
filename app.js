const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const student = require('./routes/studentRoute');
const subject = require('./routes/subjectRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');

app.use('/students', student);
app.use('/subjects', subject);

app.listen(3000);
console.log('3000 is all you need');
