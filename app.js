let express = require('express')
let app = express()
let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('data.db')
let body = require('body-parser');

app.set('view engine','ejs');

let subjects = require('./routers/subjects.js')

//Subjects
app.use('/subjects',subjects);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
