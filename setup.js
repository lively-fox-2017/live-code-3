const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/data.db');

// set the view engine to ejs
app.set('view engine', 'ejs');

// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//** routes
const index = require('./routes/index')

// ...
app.use('/', index)


// **
app.get('/',(req,res)=>{
  res.send('online')
})

app.listen('3456',()=>{
	console.log('listening in port 3456')
})


//** setup table
function createTable(){
  db.run(`CREATE TABLE IF NOT EXISTS Subject (id INTEGER PRIMARY KEY, subject_name TEXT, subject_code TEXT)`,function(err){
    if(err){
      console.log('error create table Subject')
    }else{
      console.log('table Subject created')
    }
  })

  db.run(`CREATE TABLE IF NOT EXISTS Teacher (id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, email TEXT, gender TEXT)`,function(err){
    if(err){
      console.log('error create table Teacher')
    }else{
      console.log('table Teacher created')
    }
  })

  db.run(`CREATE TABLE IF NOT EXISTS Student (id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, email TEXT, gender TEXT)`,function(err){
    if(err){
      console.log('error create table Student')
    }else{
      console.log('table Student created')
    }
  })
}

//let alter_table
let alter_table = `ALTER TABLE Teacher ADD id_Teacher INTEGER REFERENCES Subject('id')`

// function createAlterTable(){
// 	db.run(alter_table, (err) => {
// 		if(err){
// 			console.log('err alter table Teacher')
// 		}
// 		console.log('alter table Teacher success')
// 	})
// }

//createTable();
