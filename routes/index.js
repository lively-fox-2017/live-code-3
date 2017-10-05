var express = require('express')
var app = express()

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var ejs = require('ejs')
app.set('view engine','ejs')


// var router = express.Ro

app.get('/index', function (req, res) {
  res.send('Hi')
})
