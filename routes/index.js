const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/data.db')

router.get('/', function (req, res) {
    res.render('index')
    
})


module.exports = router;