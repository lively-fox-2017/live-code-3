const express = require('express')
const router = express.Router()

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('data/data.db')

// modules
let Index = require('../models/index')


// read
router.get('/', (req, res) => {
	//res.send ('hello world')
  // db.all(`select * from Subject`,(err,row)=>{
  //   if(err){
  //     console.log('error load from Subject')
  //   }else{
  //     res.render('index',{dataJsonSubject:row})
  //   }
  // })

  Index.read().then(function(result){
    res.render('index',{dataJsonSubject:result})
  }).catch(function(err){
    console.log('error load db from Subject')
  })

})

// create
router.post('/', (req,res)=>{
  db.run(`insert into Subject(subject_name, subject_code) VALUES ('${req.body.subjectName}', '${req.body.subjectCode}')`)
  res.redirect('/')
  console.log(req.body)
})

// delete
router.get('/delete/:id', (req,res)=>{
  db.run(`delete from Subject where id = "${req.param('id')}"`,(err,row)=>{
    if(err){
      console.log('error delete from Subject')
    }else{
      res.redirect('/')
    }
  })
})

// update get
 router.get('/update/:id',(req,res) =>{
 	db.all(`select * from Subject where id="${req.param('id')}"`, function(err, row){
 		//console.log(row)
 		res.render('index-edit',{dataJsonSubject:row})
 	})
 })

// update post
 router.post('update/:id',(req,res) => {
 	// update table-name SET column-name = '${value}', column-name = '${value}' where condition
 	db.all(`update Subject set subject_name ='${req.body.subjectName}' where id='${req.param('id')}'`, function(err,row){
 		res.redirect('../../index')
 	})
 })

module.exports = router
