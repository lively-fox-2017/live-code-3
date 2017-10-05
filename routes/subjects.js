const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/data.db')

router.get('/', function (req, res) {
    res.render('subject')
    
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


module.exports = router