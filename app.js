const express = require('express')
const app = express()
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())



// const index = require('./routers/index')
// app.use('/', index);


const subject = require('./routers/subjects')
app.use('/', subject);






app.listen(3002);
