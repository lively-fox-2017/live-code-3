const express = require('express')
const router = express.Router()
const Subject = require('../models/subjects')

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/data.db');


// })

router.get('/', function(req,res){
  res.send('hello')
  Subject.findAll()
  .then((rowSubject)=>{
    console.log(rowSubject);
  //  res.render('subjects',{rowSubject})
  })
})












  //
  // static findAll(){
  //   return new Promise((resolve, reject)=>{
  //     db.all('SELECT * FROM contacts',(err,row)=>{
  //       if(!err){
  //         resolve(row);
  //       }else{
  //         reject(err);
  //       }
  //     })
  //   })
  // }
  //











// router.get('/', function(req,res){
//   Contact.findAll()
//   .then((row)=>{
//     res.render('contacts', {data:row})
//   })
// })
//
// router.get('/', function(req, res){
//   Contact.findById().then((data)=>{
//      res.render('editContacts',{data:data})
//   })
// })




 module.exports = router;
