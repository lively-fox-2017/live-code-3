const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');

const index=require('./routes/index');
const subject=require('./routes/subject');

app.use('/',index);
app.use('/subject',subject);

app.listen(3000,()=>{
  console.log('aps runing att port 3000');
})
