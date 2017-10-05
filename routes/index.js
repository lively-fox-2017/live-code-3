const express = require('express')
const router = express.Router()

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('data/data.db')


// read
router.get('/', (req, res) => {
	//res.send ('hello world')
  db.all(`select * from Subject`,(err,row)=>{
    if(err){
      console.log('error load from Subject')
    }else{
      res.render('index',{dataJsonSubject:row})
    }
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


module.exports = router
