var express = require('express')
var app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var ejs = require('ejs')
app.set('view engine','ejs')

var router = express.Router();

const Students = require('../models/students')

router.get('/', function (req, res) {
  Students.selectAll().then((dataRow)=>{
    console.log(dataRow);
    // res.send(dataRow)
    res.render('students' , {dataRow:dataRow})
  })
})

module.exports = router;
