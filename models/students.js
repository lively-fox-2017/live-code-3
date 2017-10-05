var express = require('express')
var app = express()

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var ejs = require('ejs')
app.set('view engine','ejs')

class Students {
  constructor(data){
    this.id=data.id
    this.first_name    =  data.first_name
    this.last_name    =  data.last_name
    this.email    =  data.email
    this.genderID    =  data.genderID
  }

  static selectAll(){
    return new Promise(function(resolve, reject) {
      db.all('select * from Students', (err,rows)=>{
        // console.log(rows);
        let data = []
        rows.forEach(row=>{
          let dataRow = new Students (row)
          data.push(dataRow)
        })
        resolve(data)
      })
    });
  }

  static selectID(id){
    return new Promise(function(resolve, reject) {
      db.all(`select * from Students where id='${id}'`, (err,rows)=>{
        // console.log(rows);
        let data = []
        rows.forEach(row=>{
          let dataRow = new Students (row)
          data.push(dataRow)
        })
        resolve(data)
      })
    });
  }


  static insert(first_name,last_name,email,genderID){
    return new Promise(function(resolve, reject) {
      db.run(`insert into Students values(null , '${first_name}','${last_name}','${email}','${genderID}')`, function (err){
        resolve(this.lastID)
      })
    });
  }

  static edit(first_name,last_name,email,genderID){
    return new Promise(function(resolve, reject) {
      db.run(`update Students  set first_name='${first_name}',last_name='${last_name}',email='${email}',genderID'${genderID}')`, function (err){
        resolve(this.lastID)
      })
    });
  }

  static deleteID(id){
    return new Promise(function(resolve, reject) {
      db.run(`delete from Students where id = '${id}'`, function (err){
        resolve(this.lastID)
      })
    });
  }

}



module.exports = Students;