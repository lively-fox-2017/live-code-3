const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const index=require('./routes/index');
const subject=require('./routes/subject');
const teacher=require('./routes/teacher');

app.use('/',index);
app.use('/subject',subject);
app.use('/teacher',teacher);

app.listen(3000,()=>{
  console.log('aps runing att port 3000');
})
