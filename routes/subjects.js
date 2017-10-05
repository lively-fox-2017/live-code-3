const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/data.db')
const Subject = require('../models/modelSubject')


router.get('/', function (req, res) {
    Subject.findAll().then((result)=>{
        res.render('subject', {dataRow : result})
    })
})

router.post('/', function (req, res) {
})

router.get('/update/:id', function (req, res) {
   
})

router.post('/update/:id', function (req, res) {

})

router.get('/delete/:id', function (req, res) {
    Profile.deleteData(req.params.id).then((result) => {
        res.redirect('../../profiles')
    })
})


module.exports = router;