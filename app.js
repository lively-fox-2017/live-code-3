// express
const express = require('express');
const app = express();

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// ejs
app.set('view engine', 'ejs');

// route index --------------------------------------------------
const index = require('./routers/index');
app.use('/', index);

// route index --------------------------------------------------
const teacher = require('./routers/teacher');
app.use('/', teacher);

// route index --------------------------------------------------
const subject = require('./routers/subject');
app.use('/', subject);



app.listen(3002);
console.log('Listening on port 3002');
