const express=require('express')
const app=express()
var bodyParser = require('body-parser')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var sqlite3= require ('sqlite3');
var db=new sqlite3.Database('./db/database.db')


const index=require('./routes/index')
const subject=require('./routes/subject')
const teacher=require('./routes/teacher')

app.use('/',index)
app.use('/subject',subject)
app.use('/teacher',teacher)


// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
