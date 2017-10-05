const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/data.db')
const Subject = require('../models/modelSubject')


router.get('/', function (req, res) {
    Subject.findAll().then((result)=>{
        res.render('subject', {dataRow : result, message : ''})
    })
})

router.post('/', function (req, res) {
    Subject.newData(req.body).then((hasil)=>{
        if(hasil = ''){
            res.render('subject', {dataRow : result, message : 'Cannot add the same code'})
        }else{
            res.redirect('subjects')
        }
        
    })
})

router.get('/update/:id', function (req, res) {
   
})

router.post('/update/:id', function (req, res) {

})

router.get('/delete/:id', function (req, res) {
    Subject.deleteData(req.params.id).then((result) => {
        res.redirect('../../subjects')
    })
})


module.exports = router;