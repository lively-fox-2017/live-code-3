var express = require('express');
var route = express();

route.get('/', function (req, res) {
  res.render('students')
})

module.exports = route;
